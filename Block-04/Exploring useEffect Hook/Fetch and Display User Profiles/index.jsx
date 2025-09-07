import React, { useEffect, useState } from "react";

// Reusable User Card Component
const UserCard = ({ name, email, city }) => {
  return (
    <div
      style={{
        padding: "15px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <h3 style={{ marginBottom: "5px" }}>{name}</h3>
      <p style={{ margin: "5px 0" }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ margin: "5px 0" }}>
        <strong>City:</strong> {city}
      </p>
    </div>
  );
};

// Main App Component
const UsersApp = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch data on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle search filtering
  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(results);
  }, [search, users]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>⏳ Loading users...</h2>;
  }

  if (error) {
    return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>User Profiles</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Render User Cards */}
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No users found ❌</p>
      )}
    </div>
  );
};

export default UsersApp;
