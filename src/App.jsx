import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import EstadoPedido from "./components/EstadoPedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📘 Laboratorio 2 - Primeros Componentes con JSX</h1>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>📌 Ejercicio 1 - Perfil</h2>
        <Perfil />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>🌤️ Ejercicio 2 - Clima</h2>
        <Clima />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>📦 Ejercicio 3 - Estado del pedido</h2>
        <EstadoPedido />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>🔐 Ejercicio 4 - Mensaje de bienvenida</h2>
        <MensajeBienvenida />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>📚 Ejercicio 5 - Habilidades técnicas</h2>
        <ListaHabilidades />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>🛒 Ejercicio 6 - Lista de productos</h2>
        <ListaProductos />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>✅ Ejercicio 7 - Lista de tareas</h2>
        <ListaTareas />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>🃏 Ejercicio 8 - Tarjeta</h2>
        <Tarjeta />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>📊 Ejercicio 9 - Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    color: "#333",
    borderBottom: "3px solid #007bff",
    paddingBottom: "10px",
    marginBottom: "30px",
  },
  subtitle: {
    color: "#007bff",
    borderLeft: "4px solid #007bff",
    paddingLeft: "12px",
    marginBottom: "10px",
  },
  section: {
    backgroundColor: "white",
    borderRadius: "8px",
    marginBottom: "20px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default App;