import { useParams, Link, useNavigate } from "react-router-dom";
import { useNotas } from "../context/NotasContext";

function DetalleNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, eliminarNota, toggleFijada } = useNotas();
  const nota = notas.find((n) => n.id === id);

  const handleEliminar = () => {
    if (window.confirm("¿Estás seguro de eliminar esta nota?")) {
      eliminarNota(id);
      navigate("/notas");
    }
  };

  if (!nota) {
    return (
      <div style={styles.notFound}>
        <h2>Nota no encontrada</h2>
        <p>La nota que buscas no existe o fue eliminada.</p>
        <Link to="/notas" style={styles.link}>
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
    <div style={styles.container}>
      <div style={styles.header}>
        <Link to="/notas" style={styles.backLink}>
          ← Volver a notas
        </Link>
        <div>
          <button onClick={() => toggleFijada(nota.id)} style={styles.pinButton}>
            {nota.fijada ? "📌 Desfijar" : "📍 Fijar"}
          </button>
          <Link to={`/notas/${id}/editar`} style={styles.editButton}>
            ✏️ Editar
          </Link>
          <button onClick={handleEliminar} style={styles.deleteButton}>
            🗑️ Eliminar
          </button>
        </div>
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>
          {getCategoriaEmoji(nota.categoria)} {nota.titulo}
        </h1>
        <div style={styles.meta}>
          <span style={styles.badge}>{nota.categoria}</span>
          <span style={styles.date}>
            Creada: {formatearFecha(nota.fechaCreacion)}
          </span>
        </div>
        <div style={styles.body}>
          <p>{nota.contenido}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px",
  },
  backLink: {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "14px",
  },
  pinButton: {
    padding: "8px 16px",
    backgroundColor: "#f39c12",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  editButton: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#3498db",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    marginRight: "10px",
  },
  deleteButton: {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  content: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    marginTop: 0,
    color: "#2c3e50",
  },
  meta: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee",
  },
  badge: {
    backgroundColor: "#ecf0f1",
    padding: "4px 12px",
    borderRadius: "4px",
    fontSize: "12px",
    textTransform: "capitalize",
  },
  date: {
    fontSize: "12px",
    color: "#999",
  },
  body: {
    lineHeight: "1.8",
    color: "#333",
  },
  notFound: {
    textAlign: "center",
    padding: "40px",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
};

export default DetalleNota;