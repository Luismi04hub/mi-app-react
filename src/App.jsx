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
        
        {/* Ejercicio 1 - Perfil */}
        <Acordeon titulo="📌 Ejercicio 1: Perfil Profesional">
          <Perfil />
        </Acordeon>

        {/* Ejercicio 2 - Clima */}
        <Acordeon titulo="🌤️ Ejercicio 2: Información del Clima">
          <Clima />
        </Acordeon>

        {/* Ejercicio 3 - Estado del Pedido */}
        <Acordeon titulo="📦 Ejercicio 3: Estado del Pedido">
          <EstadoPedido />
        </Acordeon>

        {/* Ejercicio 4 - Mensaje de Bienvenida */}
        <Acordeon titulo="🔐 Ejercicio 4: Mensaje de Bienvenida">
          <MensajeBienvenida />
        </Acordeon>

        {/* Ejercicio 5 - Lista de Habilidades */}
        <Acordeon titulo="📚 Ejercicio 5: Habilidades Técnicas">
          <ListaHabilidades />
        </Acordeon>

        {/* Ejercicio 6 - Lista de Productos */}
        <Acordeon titulo="🛒 Ejercicio 6: Lista de Productos">
          <ListaProductos />
        </Acordeon>

        {/* Ejercicio 7 - Lista de Tareas */}
        <Acordeon titulo="✅ Ejercicio 7: Lista de Tareas">
          <ListaTareas />
        </Acordeon>

        {/* Ejercicio 8 - Tarjeta */}
        <Acordeon titulo="🃏 Ejercicio 8: Tarjeta Reutilizable">
          <Tarjeta />
        </Acordeon>

        {/* Ejercicio 9 - Dashboard */}
        <Acordeon titulo="📊 Ejercicio 9: Dashboard de Usuario">
          <Dashboard />
        </Acordeon>

        {/* Ejercicio 10 - Demostración de Alerta (Lab 3 sección) */}
        <Acordeon titulo="🎨 Ejercicio 10: Demostración de Componente Alerta">
          <h3>Componente Alerta - Demostración de los 4 tipos</h3>
          <Alerta tipo="exito" titulo="¡Operación exitosa!">
            Los datos se guardaron correctamente.
          </Alerta>
          <Alerta tipo="advertencia" titulo="Advertencia">
            Tu sesión expirará en 5 minutos.
          </Alerta>
          <Alerta tipo="error" titulo="Error crítico">
            No se pudo conectar con el servidor.
          </Alerta>
          <Alerta tipo="info" titulo="Información">
            El sistema se actualizará esta noche.
          </Alerta>
        </Acordeon>
      </div>

      {/* ========================================== */}
      {/* SECCIÓN: LABORATORIO 3 */}
      {/* ========================================== */}
      <div style={styles.labSection}>
        <h2 style={styles.labTitle}>📘 Laboratorio 3 - Props, Estado y Eventos</h2>

        {/* Ejercicio 1 - Alerta y Acordeón (ya demostrado arriba) */}
        <Acordeon titulo="📌 Ejercicio 1: Acordeón (este componente)">
          <p>Este mismo componente Acordeón es el resultado del Ejercicio 1 del Laboratorio 3.</p>
          <p>✅ Puedes abrir y cerrar cada sección haciendo clic en el título.</p>
          <p>✅ El indicador ►/▼ muestra el estado actual.</p>
        </Acordeon>

        {/* Ejercicio 2 - Contador */}
        <Acordeon titulo="🔢 Ejercicio 2: Contador Interactivo">
          <Contador />
        </Acordeon>

        {/* Ejercicio 3 - Lista de Contactos */}
        <Acordeon titulo="📞 Ejercicio 3: Lista de Contactos">
          <ListaContactos />
        </Acordeon>

        {/* Ejercicio 4 - Formulario de Evento */}
        <Acordeon titulo="📅 Ejercicio 4: Formulario de Evento">
          <FormularioEvento />
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