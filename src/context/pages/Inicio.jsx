import { useNotas } from "../context/NotasContext";

function Inicio() {
  const { notas } = useNotas();

  const notasFijadas = notas.filter((n) => n.fijada).length;
  const categorias = {
    personal: notas.filter((n) => n.categoria === "personal").length,
    trabajo: notas.filter((n) => n.categoria === "trabajo").length,
    estudio: notas.filter((n) => n.categoria === "estudio").length,
    ideas: notas.filter((n) => n.categoria === "ideas").length,
  };

  return (
    <div style={styles.container}>
      <h2>🏠 Bienvenido a MisNotas</h2>
      <p>Tu aplicación para gestionar notas de manera fácil y rápida.</p>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3>📝 Total de notas</h3>
          <p style={styles.statNumber}>{notas.length}</p>
        </div>
        <div style={styles.statCard}>
          <h3>📌 Notas fijadas</h3>
          <p style={styles.statNumber}>{notasFijadas}</p>
        </div>
      </div>

      <div style={styles.categoriesGrid}>
        <div style={styles.categoryCard}>
          <span>💼 Trabajo</span>
          <strong>{categorias.trabajo}</strong>
        </div>
        <div style={styles.categoryCard}>
          <span>📚 Estudio</span>
          <strong>{categorias.estudio}</strong>
        </div>
        <div style={styles.categoryCard}>
          <span>🏠 Personal</span>
          <strong>{categorias.personal}</strong>
        </div>
        <div style={styles.categoryCard}>
          <span>💡 Ideas</span>
          <strong>{categorias.ideas}</strong>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  statCard: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "10px 0 0",
    color: "#3498db",
  },
  categoriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginTop: "30px",
  },
  categoryCard: {
    backgroundColor: "#ecf0f1",
    padding: "15px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default Inicio;