function ListaHabilidades() {
  const habilidades = [
    "React",
    "JavaScript",
    "CSS",
    "Node.js",
    "Git",
    "TypeScript",
  ];

  return (
    <div style={styles.card}>
      <h3>📚 Habilidades técnicas</h3>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
  },
};

export default ListaHabilidades;