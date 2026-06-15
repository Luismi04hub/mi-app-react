function Tarjeta() {
  const datos = {
    titulo: "React Avanzado",
    descripcion: "Aprende a crear componentes reutilizables y optimizar tu código",
    etiquetas: ["JavaScript", "Hooks", "Componentes"],
    destacado: true,
  };

  return (
    <div
      style={{
        ...styles.card,
        border: datos.destacado ? "2px solid #ff5722" : "1px solid #ccc",
        backgroundColor: datos.destacado ? "#fff3e0" : "white",
      }}
    >
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta, index) => (
          <span key={index} style={styles.badge}>
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#e0e0e0",
    borderRadius: "16px",
    padding: "4px 12px",
    margin: "4px",
    fontSize: "12px",
  },
};

export default Tarjeta;