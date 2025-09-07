import React, { useState, useEffect } from "react";

const DailyQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch quote
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh every 30 seconds
  useEffect(() => {
    fetchQuote(); // fetch on mount

    const interval = setInterval(() => {
      fetchQuote();
    }, 30000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "20px",
          borderRadius: "12px",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          transition: "all 0.3s ease",
        }}
      >
        {loading ? (
          <div className="spinner" style={{ fontSize: "18px" }}>
            ⏳ Loading new quote...
          </div>
        ) : (
          <>
            <p style={{ fontSize: "20px", fontStyle: "italic" }}>
              "{quote?.content}"
            </p>
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              — {quote?.author}
            </p>
          </>
        )}
      </div>

      <button
        onClick={fetchQuote}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "16px",
          transition: "all 0.2s ease",
        }}
      >
        {loading ? "Fetching..." : "Get New Quote"}
      </button>
    </div>
  );
};

export default DailyQuote;