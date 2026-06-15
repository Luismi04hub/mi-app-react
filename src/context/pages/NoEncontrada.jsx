import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={styles.link}>
        Volver al inicio
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
  },
  code: {
    fontSize: "72px",
    color: "#e74c3c",
    marginBottom: "20px",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

export default NoEncontrada;