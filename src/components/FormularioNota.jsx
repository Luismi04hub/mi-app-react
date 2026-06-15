import { useState } from "react";
import { Link } from "react-router-dom";

function FormularioNota({ valoresIniciales, onSubmit, botonTexto, cancelarLink }) {
  const [formData, setFormData] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Limpiar error del campo
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formData.titulo.trim() || formData.titulo.length < 3) {
      nuevosErrores.titulo = "El título debe tener al menos 3 caracteres";
    }
    if (!formData.contenido.trim() || formData.contenido.length < 10) {
      nuevosErrores.contenido = "El contenido debe tener al menos 10 caracteres";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Título *</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          style={styles.input}
        />
        {errores.titulo && <span style={styles.error}>{errores.titulo}</span>}
      </div>

      <div style={styles.formGroup}>
        <label>Contenido *</label>
        <textarea
          name="contenido"
          value={formData.contenido}
          onChange={handleChange}
          rows={8}
          style={styles.textarea}
        />
        {errores.contenido && <span style={styles.error}>{errores.contenido}</span>}
      </div>

      <div style={styles.formGroup}>
        <label>Categoría</label>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="fijada"
            checked={formData.fijada}
            onChange={handleChange}
          />
          Fijar nota
        </label>
      </div>

      <div style={styles.buttons}>
        <button type="submit" style={styles.submitButton}>
          {botonTexto}
        </button>
        <Link to={cancelarLink} style={styles.cancelButton}>
          Cancelar
        </Link>
      </div>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    fontFamily: "inherit",
  },
  select: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
  error: {
    display: "block",
    color: "#e74c3c",
    fontSize: "12px",
    marginTop: "5px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#95a5a6",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  },
};

export default FormularioNota;