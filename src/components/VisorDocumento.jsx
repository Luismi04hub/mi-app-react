import { useState, useEffect } from "react";

function VisorDocumento() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = `Contador: ${contador} - Mi App`;

    // Función de limpieza que se ejecuta al desmontar
    return () => {
      document.title = "Mi App";
    };
  }, [contador]); // Se ejecuta cada vez que contador cambia

  const incrementar = () => {
    setContador((prev) => prev + 1);
  };

  const decrementar = () => {
    setContador((prev) => prev - 1);
  };

  return (
    <div style={styles.card}>
      <h3>📄 Visor de Documento</h3>
      <p style={{ fontSize: "32px", fontWeight: "bold" }}>{contador}</p>
      <div>
        <button onClick={decrementar} style={styles.button}>
          ➖ Decrementar
        </button>
        <button onClick={incrementar} style={styles.button}>
          ➕ Incrementar
        </button>
      </div>
      <p style={{ fontSize: "12px", color: "#666", marginTop: "16px" }}>
        💡 El título de la pestaña muestra el valor actual del contador
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
  },
  button: {
    margin: "8px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
};

export default VisorDocumento;