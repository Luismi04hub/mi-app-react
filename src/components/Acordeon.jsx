import { useState } from "react";

function Acordeon({ titulo, children, defaultExpandido = false }) {
  const [expandido, setExpandido] = useState(defaultExpandido);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px 0",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          padding: "12px 16px",
          backgroundColor: "#f5f5f5",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{titulo}</span>
        <span>{expandido ? "▼" : "►"}</span>
      </div>
      {expandido && (
        <div style={{ padding: "16px", backgroundColor: "white" }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Acordeon;