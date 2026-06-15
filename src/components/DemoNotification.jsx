import useNotification from "../hooks/useNotification";

function DemoNotification() {
  const { notificacion, mostrar, cerrar } = useNotification(3000);

  const getEstiloNotificacion = (tipo) => {
    const colores = {
      exito: { borderLeft: "4px solid #28a745", bg: "#d4edda", color: "#155724" },
      error: { borderLeft: "4px solid #dc3545", bg: "#f8d7da", color: "#721c24" },
      advertencia: { borderLeft: "4px solid #ffc107", bg: "#fff3cd", color: "#856404" },
      info: { borderLeft: "4px solid #17a2b8", bg: "#d1ecf1", color: "#0c5460" },
    };
    return colores[tipo] || colores.info;
  };

  return (
    <div style={styles.card}>
      <h3>🔔 Demo: useNotification</h3>
      
      <div>
        <button onClick={() => mostrar("¡Operación exitosa!", "exito")} style={styles.buttonSuccess}>
          ✅ Mostrar éxito
        </button>
        <button onClick={() => mostrar("Ocurrió un error", "error")} style={styles.buttonDanger}>
          ❌ Mostrar error
        </button>
        <button onClick={() => mostrar("Ten cuidado", "advertencia")} style={styles.buttonWarning}>
          ⚠️ Mostrar advertencia
        </button>
        <button onClick={() => mostrar("Información importante", "info")} style={styles.buttonInfo}>
          ℹ️ Mostrar info
        </button>
      </div>

      {notificacion && (
        <div
          style={{
            ...styles.notificacion,
            ...getEstiloNotificacion(notificacion.tipo),
          }}
        >
          <span>{notificacion.mensaje}</span>
          <button onClick={cerrar} style={styles.closeBtn}>
            ✖
          </button>
        </div>
      )}
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
  buttonSuccess: {
    margin: "4px",
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonDanger: {
    margin: "4px",
    padding: "8px 12px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonWarning: {
    margin: "4px",
    padding: "8px 12px",
    backgroundColor: "#ffc107",
    color: "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonInfo: {
    margin: "4px",
    padding: "8px 12px",
    backgroundColor: "#17a2b8",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  notificacion: {
    marginTop: "16px",
    padding: "12px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    animation: "slideIn 0.3s ease",
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: "0 4px",
  },
};

export default DemoNotification;