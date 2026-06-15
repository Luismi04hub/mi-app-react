import { useState, useEffect } from "react";

function ConfiguracionUsuario() {
  // Estado inicial leyendo desde localStorage
  const obtenerValorInicial = () => {
    try {
      const guardado = localStorage.getItem("config-usuario");
      if (guardado) {
        return JSON.parse(guardado);
      }
    } catch (error) {
      console.error("Error al leer localStorage:", error);
    }
    return {
      nombre: "",
      tema: "claro",
      notificaciones: true,
    };
  };

  const [config, setConfig] = useState(obtenerValorInicial);

  // Persistir en localStorage cada vez que cambia la configuración
  useEffect(() => {
    try {
      localStorage.setItem("config-usuario", JSON.stringify(config));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }, [config]);

  const handleChange = (campo, valor) => {
    setConfig((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const restablecer = () => {
    const valoresDefault = {
      nombre: "",
      tema: "claro",
      notificaciones: true,
    };
    setConfig(valoresDefault);
    localStorage.setItem("config-usuario", JSON.stringify(valoresDefault));
  };

  return (
    <div style={styles.card}>
      <h3>⚙️ Configuración de Usuario</h3>

      <div style={styles.formGroup}>
        <label>Nombre:</label>
        <input
          type="text"
          value={config.nombre}
          onChange={(e) => handleChange("nombre", e.target.value)}
          placeholder="Ingresa tu nombre"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Tema:</label>
        <select
          value={config.tema}
          onChange={(e) => handleChange("tema", e.target.value)}
          style={styles.select}
        >
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            checked={config.notificaciones}
            onChange={(e) => handleChange("notificaciones", e.target.checked)}
          />
          Habilitar notificaciones
        </label>
      </div>

      <button onClick={restablecer} style={styles.buttonDanger}>
        Restablecer valores
      </button>

      <div style={styles.preview}>
        <h4>📦 Vista previa de configuración guardada:</h4>
        <pre style={styles.pre}>
          {JSON.stringify(config, null, 2)}
        </pre>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
  },
  formGroup: {
    marginBottom: "16px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "4px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    width: "100%",
    padding: "8px",
    marginTop: "4px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  preview: {
    marginTop: "20px",
    padding: "12px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
  },
  pre: {
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: "4px",
    overflow: "auto",
  },
  buttonDanger: {
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ConfiguracionUsuario;