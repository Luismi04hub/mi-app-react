// ============================================
// LABORATORIO 2 - Componentes básicos con JSX
// ============================================
import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import EstadoPedido from "./components/EstadoPedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

// ============================================
// LABORATORIO 3 - Props, Estado y Eventos
// ============================================
import Alerta from "./components/Alerta";
import Acordeon from "./components/Acordeon";
import Contador from "./components/Contador";
import ListaContactos from "./components/ListaContactos";
import FormularioEvento from "./components/FormularioEvento";

// ============================================
// LABORATORIO 4 - useEffect y Custom Hooks
// ============================================
import VisorDocumento from "./components/VisorDocumento";
import TemporizadorPomodoro from "./components/TemporizadorPomodoro";
import ConfiguracionUsuario from "./components/ConfiguracionUsuario";
import DemoLocalStorage from "./components/DemoLocalStorage";
import DemoNotification from "./components/DemoNotification";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        📚 Portafolio de Laboratorios - Programación Web Avanzada
      </h1>

      {/* ========================================== */}
      {/* SECCIÓN: LABORATORIO 2 */}
      {/* ========================================== */}
      <div style={styles.labSection}>
        <h2 style={styles.labTitle}>📗 Laboratorio 2 - Primeros Componentes con JSX</h2>

        <Acordeon titulo="📌 Ejercicio 1: Perfil Profesional">
          <Perfil />
        </Acordeon>

        <Acordeon titulo="🌤️ Ejercicio 2: Información del Clima">
          <Clima />
        </Acordeon>

        <Acordeon titulo="📦 Ejercicio 3: Estado del Pedido">
          <EstadoPedido />
        </Acordeon>

        <Acordeon titulo="🔐 Ejercicio 4: Mensaje de Bienvenida">
          <MensajeBienvenida />
        </Acordeon>

        <Acordeon titulo="📚 Ejercicio 5: Habilidades Técnicas">
          <ListaHabilidades />
        </Acordeon>

        <Acordeon titulo="🛒 Ejercicio 6: Lista de Productos">
          <ListaProductos />
        </Acordeon>

        <Acordeon titulo="✅ Ejercicio 7: Lista de Tareas">
          <ListaTareas />
        </Acordeon>

        <Acordeon titulo="🃏 Ejercicio 8: Tarjeta Reutilizable">
          <Tarjeta />
        </Acordeon>

        <Acordeon titulo="📊 Ejercicio 9: Dashboard de Usuario">
          <Dashboard />
        </Acordeon>
      </div>

      {/* ========================================== */}
      {/* SECCIÓN: LABORATORIO 3 */}
      {/* ========================================== */}
      <div style={styles.labSection}>
        <h2 style={styles.labTitle}>📘 Laboratorio 3 - Props, Estado y Eventos</h2>

        <Acordeon titulo="📌 Ejercicio 1: Componente Alerta y Acordeón">
          <h3>Tipos de Alerta:</h3>
          <Alerta tipo="exito" titulo="Éxito">Operación completada</Alerta>
          <Alerta tipo="advertencia" titulo="Advertencia">Revisa tus datos</Alerta>
          <Alerta tipo="error" titulo="Error">Algo salió mal</Alerta>
          <Alerta tipo="info" titulo="Info">Novedades disponibles</Alerta>
        </Acordeon>

        <Acordeon titulo="🔢 Ejercicio 2: Contador Interactivo">
          <Contador />
        </Acordeon>

        <Acordeon titulo="📞 Ejercicio 3: Lista de Contactos">
          <ListaContactos />
        </Acordeon>

        <Acordeon titulo="📅 Ejercicio 4: Formulario de Evento">
          <FormularioEvento />
        </Acordeon>
      </div>

      {/* ========================================== */}
      {/* SECCIÓN: LABORATORIO 4 */}
      {/* ========================================== */}
      <div style={styles.labSection}>
        <h2 style={styles.labTitle}>📙 Laboratorio 4 - useEffect y Custom Hooks</h2>

        <Acordeon titulo="📄 Ejercicio 1: Visor de Documento (Sincronización con título)">
          <VisorDocumento />
        </Acordeon>

        <Acordeon titulo="🍅 Ejercicio 2: Temporizador Pomodoro">
          <TemporizadorPomodoro />
        </Acordeon>

        <Acordeon titulo="⚙️ Ejercicio 3: Configuración de Usuario (localStorage)">
          <ConfiguracionUsuario />
        </Acordeon>

        <Acordeon titulo="💾 Ejercicio 4: Custom Hook - useLocalStorage">
          <DemoLocalStorage />
        </Acordeon>

        <Acordeon titulo="🔔 Ejercicio 4: Custom Hook - useNotification">
          <DemoNotification />
        </Acordeon>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#1a1a2e",
    borderBottom: "3px solid #007bff",
    paddingBottom: "15px",
    marginBottom: "30px",
    fontSize: "28px",
  },
  labSection: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  labTitle: {
    color: "#007bff",
    borderLeft: "4px solid #007bff",
    paddingLeft: "15px",
    marginBottom: "20px",
    marginTop: 0,
  },
};

export default App;