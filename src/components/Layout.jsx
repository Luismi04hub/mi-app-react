import { NavLink, Outlet } from "react-router-dom";
import { useNotas } from "../context/NotasContext";

function Layout() {
  const { notas } = useNotas();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>📝 MisNotas</h1>
        <nav style={styles.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {}),
            })}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/notas"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {}),
            })}
          >
            Notas
          </NavLink>
          <NavLink
            to="/notas/nueva"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.linkActive : {}),
            })}
          >
            + Nueva Nota
          </NavLink>
        </nav>
        <div style={styles.counter}>📊 Total notas: {notas.length}</div>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>

      <footer style={styles.footer}>
        <p>© 2026 MisNotas - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  nav: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  linkActive: {
    backgroundColor: "#3498db",
    fontWeight: "bold",
  },
  counter: {
    marginTop: "15px",
    fontSize: "14px",
    opacity: 0.9,
  },
  main: {
    flex: 1,
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
  },
};

export default Layout;