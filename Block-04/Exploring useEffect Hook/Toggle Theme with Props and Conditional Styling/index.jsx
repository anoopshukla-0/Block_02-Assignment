import React, { useState, useEffect } from "react";

// Reusable Box component
const ThemedBox = ({ theme, children }) => {
  const boxStyle = {
    padding: "20px",
    margin: "10px 0",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow:
      theme === "light"
        ? "0 2px 5px rgba(0,0,0,0.2)"
        : "0 2px 5px rgba(255,255,255,0.1)",
  };

  return <div style={boxStyle}>{children}</div>;
};

// Main App component
const ThemeApp = () => {
  // Load theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Persist theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const appStyle = {
    minHeight: "100vh",
    padding: "30px",
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#f0f0f0",
          color: theme === "light" ? "#fff" : "#000",
          marginBottom: "20px",
        }}
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Reusable Themed Boxes */}
      <ThemedBox theme={theme}>Box 1 - {theme} theme</ThemedBox>
      <ThemedBox theme={theme}>Box 2 - styled with props</ThemedBox>
      <ThemedBox theme={theme}>Box 3 - reusable component</ThemedBox>
    </div>
  );
};

export default ThemeApp;
