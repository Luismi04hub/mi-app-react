import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import { NotasProvider, useNotas } from "./context/NotasContext";

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

// ============================================
// LABORATORIO 5 - Estado Global y Navegación
// ============================================
import FormularioNota from "./components/FormularioNota";

// Páginas del Laboratorio 5
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
    <div style={stylesPages.inicioContainer}>
      <h2>🏠 Bienvenido a MisNotas</h2>
      <p>Tu aplicación para gestionar notas de manera fácil y rápida.</p>

      <div style={stylesPages.statsGrid}>
        <div style={stylesPages.statCard}>
          <h3>📝 Total de notas</h3>
          <p style={stylesPages.statNumber}>{notas.length}</p>
        </div>
        <div style={stylesPages.statCard}>
          <h3>📌 Notas fijadas</h3>
          <p style={stylesPages.statNumber}>{notasFijadas}</p>
        </div>
      </div>

      <div style={stylesPages.categoriesGrid}>
        <div style={stylesPages.categoryCard}>
          <span>💼 Trabajo</span>
          <strong>{categorias.trabajo}</strong>
        </div>
        <div style={stylesPages.categoryCard}>
          <span>📚 Estudio</span>
          <strong>{categorias.estudio}</strong>
        </div>
        <div style={stylesPages.categoryCard}>
          <span>🏠 Personal</span>
          <strong>{categorias.personal}</strong>
        </div>
        <div style={stylesPages.categoryCard}>
          <span>💡 Ideas</span>
          <strong>{categorias.ideas}</strong>
        </div>
      </div>
    </div>
  );
}

function NotasPage() {
  const {
    notas,
    filtroCategoria,
    busqueda,
    cambiarFiltro,
    cambiarBusqueda,
    toggleFijada,
  } = useNotas();

  const notasFiltradas = notas.filter((nota) => {
    if (filtroCategoria !== "todas" && nota.categoria !== filtroCategoria) {
      return false;
    }
    if (busqueda) {
      const busquedaLower = busqueda.toLowerCase();
      return (
        nota.titulo.toLowerCase().includes(busquedaLower) ||
        nota.contenido.toLowerCase().includes(busquedaLower)
      );
    }
    return true;
  });

  const notasOrdenadas = [...notasFiltradas].sort((a, b) => {
    if (a.fijada === b.fijada) return 0;
    return a.fijada ? -1 : 1;
  });

  const getCategoriaColor = (categoria) => {
    const colores = {
      trabajo: { bg: "#e74c3c", color: "white" },
      estudio: { bg: "#3498db", color: "white" },
      personal: { bg: "#2ecc71", color: "white" },
      ideas: { bg: "#f39c12", color: "white" },
    };
    return colores[categoria] || { bg: "#95a5a6", color: "white" };
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES");
  };

  return (
    <div>
      <div style={stylesPages.filters}>
        <input
          type="text"
          placeholder="🔍 Buscar notas..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={stylesPages.searchInput}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={stylesPages.select}
        >
          <option value="todas">Todas las categorías</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <p style={stylesPages.resultCount}>
        Mostrando {notasOrdenadas.length} de {notas.length} notas
      </p>

      {notasOrdenadas.length === 0 ? (
        <div style={stylesPages.emptyState}>
          <p>No hay notas que coincidan con los filtros</p>
        </div>
      ) : (
        <div style={stylesPages.notesGrid}>
          {notasOrdenadas.map((nota) => {
            const color = getCategoriaColor(nota.categoria);
            return (
              <div key={nota.id} style={stylesPages.noteCard}>
                <Link to={`/app/notas/${nota.id}`} style={stylesPages.link}>
                  <div style={stylesPages.cardContent}>
                    <div style={stylesPages.cardHeader}>
                      <h3 style={stylesPages.noteTitle}>{nota.titulo}</h3>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFijada(nota.id);
                        }}
                        style={stylesPages.pinButton}
                      >
                        {nota.fijada ? "📌" : "📍"}
                      </button>
                    </div>
                    <p style={stylesPages.noteContent}>
                      {nota.contenido.length > 100
                        ? nota.contenido.substring(0, 100) + "..."
                        : nota.contenido}
                    </p>
                    <div style={stylesPages.cardFooter}>
                      <span
                        style={{
                          ...stylesPages.badge,
                          backgroundColor: color.bg,
                          color: color.color,
                        }}
                      >
                        {nota.categoria}
                      </span>
                      <span style={stylesPages.date}>
                        {formatearFecha(nota.fechaCreacion)}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function NuevaNotaPage() {
  const navigate = useNavigate();
  const { agregarNota } = useNotas();

  const valoresIniciales = {
    titulo: "",
    contenido: "",
    categoria: "personal",
    fijada: false,
  };

  const handleGuardar = (datos) => {
    const nuevaNota = {
      ...datos,
      id: Date.now().toString(),
      fechaCreacion: new Date().toString(),
    };
    agregarNota(nuevaNota);
    navigate("/app/notas");
  };

  return (
    <div>
      <h2>✏️ Crear Nueva Nota</h2>
      <FormularioNota
        valoresIniciales={valoresIniciales}
        onSubmit={handleGuardar}
        botonTexto="Crear nota"
        cancelarLink="/app/notas"
      />
    </div>
  );
}

function DetalleNotaPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, eliminarNota, toggleFijada } = useNotas();
  const nota = notas.find((n) => n.id === id);

  const handleEliminar = () => {
    if (window.confirm("¿Estás seguro de eliminar esta nota?")) {
      eliminarNota(id);
      navigate("/app/notas");
    }
  };

  if (!nota) {
    return (
      <div style={stylesPages.notFound}>
        <h2>Nota no encontrada</h2>
        <p>La nota que buscas no existe o fue eliminada.</p>
        <Link to="/app/notas" style={stylesPages.link}>
          Volver a la lista de notas
        </Link>
      </div>
    );
  }

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getCategoriaEmoji = (categoria) => {
    const emojis = {
      trabajo: "💼",
      estudio: "📚",
      personal: "🏠",
      ideas: "💡",
    };
    return emojis[categoria] || "📝";
  };

  return (
    <div style={stylesPages.detalleContainer}>
      <div style={stylesPages.header}>
        <Link to="/app/notas" style={stylesPages.backLink}>
          ← Volver a notas
        </Link>
        <div>
          <button onClick={() => toggleFijada(nota.id)} style={stylesPages.pinButton}>
            {nota.fijada ? "📌 Desfijar" : "📍 Fijar"}
          </button>
          <Link to={`/app/notas/${id}/editar`} style={stylesPages.editButton}>
            ✏️ Editar
          </Link>
          <button onClick={handleEliminar} style={stylesPages.deleteButton}>
            🗑️ Eliminar
          </button>
        </div>
      </div>

      <div style={stylesPages.content}>
        <h1 style={stylesPages.title}>
          {getCategoriaEmoji(nota.categoria)} {nota.titulo}
        </h1>
        <div style={stylesPages.meta}>
          <span style={stylesPages.badge}>{nota.categoria}</span>
          <span style={stylesPages.date}>
            Creada: {formatearFecha(nota.fechaCreacion)}
          </span>
        </div>
        <div style={stylesPages.body}>
          <p>{nota.contenido}</p>
        </div>
      </div>
    </div>
  );
}

function EditarNotaPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, editarNota } = useNotas();
  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div style={stylesPages.notFound}>
        <h2>Nota no encontrada</h2>
        <p>La nota que intentas editar no existe.</p>
        <Link to="/app/notas" style={stylesPages.link}>
          Volver a la lista de notas
        </Link>
      </div>
    );
  }

  const valoresIniciales = {
    titulo: nota.titulo,
    contenido: nota.contenido,
    categoria: nota.categoria,
    fijada: nota.fijada,
  };

  const handleGuardar = (datos) => {
    editarNota(id, datos);
    navigate(`/app/notas/${id}`);
  };

  return (
    <div>
      <h2>✏️ Editar Nota</h2>
      <FormularioNota
        valoresIniciales={valoresIniciales}
        onSubmit={handleGuardar}
        botonTexto="Guardar cambios"
        cancelarLink={`/app/notas/${id}`}
      />
    </div>
  );
}

function NoEncontrada() {
  return (
    <div style={stylesPages.notFoundContainer}>
      <h1 style={stylesPages.code}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={stylesPages.homeLink}>
        Volver al inicio
      </Link>
    </div>
  );
}

// Layout principal con navegación
function MainLayout() {
  return (
    <div style={styles.layout.container}>
      <header style={styles.layout.header}>
        <h1 style={styles.layout.title}>📚 Portafolio de Laboratorios</h1>
        <nav style={styles.layout.nav}>
          <NavLink to="/" end style={({ isActive }) => ({ ...styles.layout.link, ...(isActive ? styles.layout.linkActive : {}) })}>
            🏠 Inicio
          </NavLink>
          <NavLink to="/lab2" style={({ isActive }) => ({ ...styles.layout.link, ...(isActive ? styles.layout.linkActive : {}) })}>
            📗 Lab 2
          </NavLink>
          <NavLink to="/lab3" style={({ isActive }) => ({ ...styles.layout.link, ...(isActive ? styles.layout.linkActive : {}) })}>
            📘 Lab 3
          </NavLink>
          <NavLink to="/lab4" style={({ isActive }) => ({ ...styles.layout.link, ...(isActive ? styles.layout.linkActive : {}) })}>
            📙 Lab 4
          </NavLink>
          <NavLink to="/app" style={({ isActive }) => ({ ...styles.layout.link, ...(isActive ? styles.layout.linkActive : {}) })}>
            📝 MisNotas
          </NavLink>
        </nav>
      </header>
      <main style={styles.layout.main}>
        <Outlet />
      </main>
      <footer style={styles.layout.footer}>
        <p>© 2026 - Programación Web Avanzada | Todos los laboratorios integrados</p>
      </footer>
    </div>
  );
}

// Layout para MisNotas (Lab 5)
function NotasLayout() {
  const { notas } = useNotas();

  return (
    <div style={styles.notasLayout.container}>
      <header style={styles.notasLayout.header}>
        <h1 style={styles.notasLayout.title}>📝 MisNotas</h1>
        <nav style={styles.notasLayout.nav}>
          <NavLink to="/app" end style={({ isActive }) => ({ ...styles.notasLayout.link, ...(isActive ? styles.notasLayout.linkActive : {}) })}>
            Inicio
          </NavLink>
          <NavLink to="/app/notas" style={({ isActive }) => ({ ...styles.notasLayout.link, ...(isActive ? styles.notasLayout.linkActive : {}) })}>
            Notas
          </NavLink>
          <NavLink to="/app/notas/nueva" style={({ isActive }) => ({ ...styles.notasLayout.link, ...(isActive ? styles.notasLayout.linkActive : {}) })}>
            + Nueva Nota
          </NavLink>
        </nav>
        <div style={styles.notasLayout.counter}>📊 Total notas: {notas.length}</div>
      </header>
      <main style={styles.notasLayout.main}>
        <Outlet />
      </main>
      <footer style={styles.notasLayout.footer}>
        <p>© 2026 MisNotas - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

// Componente para mostrar el contenido del Laboratorio 2
function Lab2Content() {
  return (
    <div style={styles.labSection}>
      <h2 style={styles.labTitle}>📗 Laboratorio 2 - Primeros Componentes con JSX</h2>
      <Acordeon titulo="📌 Ejercicio 1: Perfil Profesional"><Perfil /></Acordeon>
      <Acordeon titulo="🌤️ Ejercicio 2: Información del Clima"><Clima /></Acordeon>
      <Acordeon titulo="📦 Ejercicio 3: Estado del Pedido"><EstadoPedido /></Acordeon>
      <Acordeon titulo="🔐 Ejercicio 4: Mensaje de Bienvenida"><MensajeBienvenida /></Acordeon>
      <Acordeon titulo="📚 Ejercicio 5: Habilidades Técnicas"><ListaHabilidades /></Acordeon>
      <Acordeon titulo="🛒 Ejercicio 6: Lista de Productos"><ListaProductos /></Acordeon>
      <Acordeon titulo="✅ Ejercicio 7: Lista de Tareas"><ListaTareas /></Acordeon>
      <Acordeon titulo="🃏 Ejercicio 8: Tarjeta Reutilizable"><Tarjeta /></Acordeon>
      <Acordeon titulo="📊 Ejercicio 9: Dashboard de Usuario"><Dashboard /></Acordeon>
    </div>
  );
}

// Componente para mostrar el contenido del Laboratorio 3
function Lab3Content() {
  return (
    <div style={styles.labSection}>
      <h2 style={styles.labTitle}>📘 Laboratorio 3 - Props, Estado y Eventos</h2>
      <Acordeon titulo="📌 Ejercicio 1: Componente Alerta y Acordeón">
        <h3>Tipos de Alerta:</h3>
        <Alerta tipo="exito" titulo="Éxito">Operación completada</Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">Revisa tus datos</Alerta>
        <Alerta tipo="error" titulo="Error">Algo salió mal</Alerta>
        <Alerta tipo="info" titulo="Info">Novedades disponibles</Alerta>
      </Acordeon>
      <Acordeon titulo="🔢 Ejercicio 2: Contador Interactivo"><Contador /></Acordeon>
      <Acordeon titulo="📞 Ejercicio 3: Lista de Contactos"><ListaContactos /></Acordeon>
      <Acordeon titulo="📅 Ejercicio 4: Formulario de Evento"><FormularioEvento /></Acordeon>
    </div>
  );
}

// Componente para mostrar el contenido del Laboratorio 4
function Lab4Content() {
  return (
    <div style={styles.labSection}>
      <h2 style={styles.labTitle}>📙 Laboratorio 4 - useEffect y Custom Hooks</h2>
      <Acordeon titulo="📄 Ejercicio 1: Visor de Documento"><VisorDocumento /></Acordeon>
      <Acordeon titulo="🍅 Ejercicio 2: Temporizador Pomodoro"><TemporizadorPomodoro /></Acordeon>
      <Acordeon titulo="⚙️ Ejercicio 3: Configuración de Usuario"><ConfiguracionUsuario /></Acordeon>
      <Acordeon titulo="💾 Ejercicio 4: Custom Hook - useLocalStorage"><DemoLocalStorage /></Acordeon>
      <Acordeon titulo="🔔 Ejercicio 4: Custom Hook - useNotification"><DemoNotification /></Acordeon>
    </div>
  );
}

// Página de inicio principal
function HomePage() {
  return (
    <div style={styles.homeContainer}>
      <h2>🎓 Programación Web Avanzada</h2>
      <p>Bienvenido al portafolio de laboratorios del curso.</p>
      <div style={styles.homeGrid}>
        <div style={styles.homeCard}>
          <h3>📗 Laboratorio 2</h3>
          <p>Componentes básicos con JSX, expresiones dinámicas, listas y condicionales.</p>
          <Link to="/lab2" style={styles.homeButton}>Ver laboratorio →</Link>
        </div>
        <div style={styles.homeCard}>
          <h3>📘 Laboratorio 3</h3>
          <p>Props, eventos, useState, formularios controlados y componentes reutilizables.</p>
          <Link to="/lab3" style={styles.homeButton}>Ver laboratorio →</Link>
        </div>
        <div style={styles.homeCard}>
          <h3>📙 Laboratorio 4</h3>
          <p>useEffect, sincronización con DOM, temporizadores, localStorage y custom hooks.</p>
          <Link to="/lab4" style={styles.homeButton}>Ver laboratorio →</Link>
        </div>
        <div style={styles.homeCard}>
          <h3>📝 Laboratorio 5</h3>
          <p>Context API, useReducer, React Router, navegación y gestión de notas.</p>
          <Link to="/app" style={styles.homeButton}>Ver laboratorio →</Link>
        </div>
      </div>
    </div>
  );
}

// ============================================
// COMPONENTE PRINCIPAL APP
// ============================================
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lab2" element={<Lab2Content />} />
          <Route path="lab3" element={<Lab3Content />} />
          <Route path="lab4" element={<Lab4Content />} />
          <Route path="app/*" element={
            <NotasProvider>
              <Routes>
                <Route element={<NotasLayout />}>
                  <Route index element={<Inicio />} />
                  <Route path="notas">
                    <Route index element={<NotasPage />} />
                    <Route path="nueva" element={<NuevaNotaPage />} />
                    <Route path=":id" element={<DetalleNotaPage />} />
                    <Route path=":id/editar" element={<EditarNotaPage />} />
                  </Route>
                </Route>
              </Routes>
            </NotasProvider>
          } />
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ============================================
// ESTILOS GLOBALES
// ============================================

const styles = {
  layout: {
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
  },
  notasLayout: {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      backgroundColor: "#1a1a2e",
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
      backgroundColor: "#e74c3c",
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
      backgroundColor: "#1a1a2e",
      color: "white",
      textAlign: "center",
      padding: "15px",
      fontSize: "14px",
    },
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
  homeContainer: {
    textAlign: "center",
  },
  homeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  homeCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  homeButton: {
    display: "inline-block",
    marginTop: "15px",
    padding: "8px 16px",
    backgroundColor: "#3498db",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

const stylesPages = {
  inicioContainer: { textAlign: "center" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "30px" },
  statCard: { backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
  statNumber: { fontSize: "36px", fontWeight: "bold", margin: "10px 0 0", color: "#3498db" },
  categoriesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginTop: "30px" },
  categoryCard: { backgroundColor: "#ecf0f1", padding: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  filters: { display: "flex", gap: "15px", marginBottom: "20px", flexWrap: "wrap" },
  searchInput: { flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "16px" },
  select: { padding: "10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "16px", minWidth: "150px" },
  resultCount: { fontSize: "14px", color: "#666", marginBottom: "20px" },
  notesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" },
  noteCard: { backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", transition: "transform 0.2s", cursor: "pointer" },
  link: { textDecoration: "none", color: "inherit" },
  cardContent: { padding: "15px" },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
  noteTitle: { margin: 0, fontSize: "18px", color: "#2c3e50" },
  pinButton: { background: "none", border: "none", fontSize: "20px", cursor: "pointer", padding: "5px" },
  noteContent: { color: "#666", fontSize: "14px", lineHeight: "1.5", marginBottom: "10px" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" },
  badge: { padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold", textTransform: "capitalize" },
  date: { fontSize: "12px", color: "#999" },
  emptyState: { textAlign: "center", padding: "40px", color: "#666" },
  detalleContainer: { maxWidth: "800px", margin: "0 auto" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" },
  backLink: { color: "#3498db", textDecoration: "none", fontSize: "14px" },
  editButton: { display: "inline-block", padding: "8px 16px", backgroundColor: "#3498db", color: "white", textDecoration: "none", borderRadius: "4px", marginRight: "10px" },
  deleteButton: { padding: "8px 16px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" },
  content: { backgroundColor: "white", borderRadius: "8px", padding: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
  title: { marginTop: 0, color: "#2c3e50" },
  meta: { display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #eee" },
  body: { lineHeight: "1.8", color: "#333" },
  notFound: { textAlign: "center", padding: "40px" },
  notFoundContainer: { textAlign: "center", padding: "60px 20px" },
  code: { fontSize: "72px", color: "#e74c3c", marginBottom: "20px" },
  homeLink: { display: "inline-block", marginTop: "20px", padding: "10px 20px", backgroundColor: "#3498db", color: "white", textDecoration: "none", borderRadius: "4px" },
};

// Necesario para useNavigate y useParams en los componentes de MisNotas
import { useNavigate, useParams } from "react-router-dom";

export default App;