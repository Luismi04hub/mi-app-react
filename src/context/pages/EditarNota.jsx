import { useParams, useNavigate, Link } from "react-router-dom";
import { useNotas } from "../context/NotasContext";
import FormularioNota from "../components/FormularioNota";

function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notas, editarNota } = useNotas();
  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div style={styles.notFound}>
        <h2>Nota no encontrada</h2>
        <p>La nota que intentas editar no existe.</p>
        <Link to="/notas" style={styles.link}>
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
    navigate(`/notas/${id}`);
  };

  return (
    <div>
      <h2>✏️ Editar Nota</h2>
      <FormularioNota
        valoresIniciales={valoresIniciales}
        onSubmit={handleGuardar}
        botonTexto="Guardar cambios"
        cancelarLink={`/notas/${id}`}
      />
    </div>
  );
}

const styles = {
  notFound: {
    textAlign: "center",
    padding: "40px",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
};

export default EditarNota;