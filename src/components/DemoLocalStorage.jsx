import useLocalStorage from "../hooks/useLocalStorage";

function DemoLocalStorage() {
  const [usuario, setUsuario] = useLocalStorage("demo-usuario", {
    nombre: "",
    edad: 0,
  });

  return (
    <div style={styles.card}>
      <h3>🎯 Demo: useLocalStorage</h3>
      <div style={styles.formGroup}>
        <label>Nombre:</label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={(e) =>
            setUsuario({ ...usuario, nombre: e.target.value })
          }
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Edad:</label>
        <input
          type="number"
          value={usuario.edad}
          onChange={(e) =>
            setUsuario({ ...usuario, edad: parseInt(e.target.value) || 0 })
          }
          style={styles.input}
        />
      </div>
      <p>💾 Los datos se guardan automáticamente en localStorage</p>
      <p>
        🔍 Abre DevTools → Application → Local Storage para ver los datos
        guardados
      </p>
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
};

export default DemoLocalStorage;