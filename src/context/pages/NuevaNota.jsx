import { useNavigate } from "react-router-dom";
import { useNotas } from "../context/NotasContext";
import FormularioNota from "../components/FormularioNota";

function NuevaNota() {
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
    navigate("/notas");
  };

  return (
    <div>
      <h2>✏️ Crear Nueva Nota</h2>
      <FormularioNota
        valoresIniciales={valoresIniciales}
        onSubmit={handleGuardar}
        botonTexto="Crear nota"
        cancelarLink="/notas"
      />
    </div>
  );
}

export default NuevaNota;