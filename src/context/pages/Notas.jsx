import { Link } from "react-router-dom";
import { useNotas } from "../context/NotasContext";

function Notas() {
  const {
    notas,
    filtroCategoria,
    busqueda,
    cambiarFiltro,
    cambiarBusqueda,
    toggleFijada,
  } = useNotas();

  // Filtrar notas
  const notasFiltradas = notas.filter((nota) => {
    // Filtro por categoría
    if (filtroCategoria !== "todas" && nota.categoria !== filtroCategoria) {
      return false;
    }
    // Filtro por búsqueda
    if (busqueda) {
      const busquedaLower = busqueda.toLowerCase();
      return (
        nota.titulo.toLowerCase().includes(busquedaLower) ||
        nota.contenido.toLowerCase().includes(busquedaLower)
      );
    }
    return true;
  });

  // Ordenar: fijadas primero
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
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="🔍 Buscar notas..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={styles.searchInput}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={styles.select}
        >
          <option value="todas">Todas las categorías</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <p style={styles.resultCount}>
        Mostrando {notasOrdenadas.length} de {notas.length} notas
      </p>

      {notasOrdenadas.length === 0 ? (
        <div style={styles.emptyState}>
          <p>No hay notas que coincidan con los filtros</p>
        </div>
      ) : (
        <div style={styles.notesGrid}>
          {notasOrdenadas.map((nota) => {
            const color = getCategoriaColor(nota.categoria);
            return (
              <div key={nota.id} style={styles.noteCard}>
                <Link to={`/notas/${nota.id}`} style={styles.link}>
                  <div style={styles.cardContent}>
                    <div style={styles.cardHeader}>
                      <h3 style={styles.noteTitle}>{nota.titulo}</h3>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFijada(nota.id);
                        }}
                        style={styles.pinButton}
                      >
                        {nota.fijada ? "📌" : "📍"}
                      </button>
                    </div>
                    <p style={styles.noteContent}>
                      {nota.contenido.length > 100
                        ? nota.contenido.substring(0, 100) + "..."
                        : nota.contenido}
                    </p>
                    <div style={styles.cardFooter}>
                      <span
                        style={{
                          ...styles.badge,
                          backgroundColor: color.bg,
                          color: color.color,
                        }}
                      >
                        {nota.categoria}
                      </span>
                      <span style={styles.date}>
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

const styles = {
  filters: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  searchInput: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    minWidth: "150px",
  },
  resultCount: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  notesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  noteCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cardContent: {
    padding: "15px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  noteTitle: {
    margin: 0,
    fontSize: "18px",
    color: "#2c3e50",
  },
  pinButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    padding: "5px",
  },
  noteContent: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  badge: {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  date: {
    fontSize: "12px",
    color: "#999",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px",
    color: "#666",
  },
};

export default Notas;