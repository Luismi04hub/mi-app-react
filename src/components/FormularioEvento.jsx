import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

function FormularioEvento() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    fecha: "",
    categoria: "",
    descripcion: "",
    esPublico: false,
  });

  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    const hoy = new Date().toISOString().split("T")[0];

    if (!formulario.titulo.trim() || formulario.titulo.length < 5) {
      nuevosErrores.titulo = "El título debe tener al menos 5 caracteres";
    }
    if (!formulario.fecha) {
      nuevosErrores.fecha = "La fecha es obligatoria";
    } else if (formulario.fecha < hoy) {
      nuevosErrores.fecha = "La fecha no puede ser pasada";
    }
    if (!formulario.categoria) {
      nuevosErrores.categoria = "Debes seleccionar una categoría";
    }
    if (!formulario.descripcion.trim() || formulario.descripcion.length < 20) {
      nuevosErrores.descripcion = "La descripción debe tener al menos 20 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      // Mostrar mensaje de éxito
      const resumen = `
        ✅ Evento registrado exitosamente:
        📌 Título: ${formulario.titulo}
        📅 Fecha: ${formulario.fecha}
        🏷️ Categoría: ${formulario.categoria}
        📝 Descripción: ${formulario.descripcion}
        🌍 Público: ${formulario.esPublico ? "Sí" : "No"}
      `;
      setMensajeExito(resumen);

      // Limpiar formulario
      setFormulario({
        titulo: "",
        fecha: "",
        categoria: "",
        descripcion: "",
        esPublico: false,
      });

      // Ocultar mensaje después de 4 segundos
      setTimeout(() => {
        setMensajeExito(null);
      }, 4000);
    }
  };

  const camposObligatoriosIncompletos =
    !formulario.titulo.trim() ||
    !formulario.fecha ||
    !formulario.categoria ||
    !formulario.descripcion.trim();

  return (
    <div style={{ padding: "16px" }}>
      <h3>📅 Registro de Evento</h3>

      {mensajeExito && (
        <Alerta tipo="exito" titulo="¡Registro exitoso!">
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
            {mensajeExito}
          </pre>
        </Alerta>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>Título del evento *</label>
          <input
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errores.titulo && (
            <Alerta tipo="error" titulo="Error">
              {errores.titulo}
            </Alerta>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Fecha *</label>
          <input
            type="date"
            name="fecha"
            value={formulario.fecha}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errores.fecha && (
            <Alerta tipo="error" titulo="Error">
              {errores.fecha}
            </Alerta>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Categoría *</label>
          <select
            name="categoria"
            value={formulario.categoria}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          >
            <option value="">Selecciona una categoría</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && (
            <Alerta tipo="error" titulo="Error">
              {errores.categoria}
            </Alerta>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>Descripción *</label>
          <textarea
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            rows={4}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errores.descripcion && (
            <Alerta tipo="error" titulo="Error">
              {errores.descripcion}
            </Alerta>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>
            <input
              type="checkbox"
              name="esPublico"
              checked={formulario.esPublico}
              onChange={handleChange}
            />
            {" "}Evento público
          </label>
        </div>

        <BotonAccion
          texto="Registrar evento"
          variante="primario"
          disabled={camposObligatoriosIncompletos}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default FormularioEvento;