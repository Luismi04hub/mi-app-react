function EstadoPedido() {
  const estado = "enviado"; // prueba: pendiente, enviado, entregado, cancelado

  let icono = "";
  let mensaje = "";

  switch (estado) {
    case "pendiente":
      icono = "⏳";
      mensaje = "Tu pedido está siendo procesado";
      break;
    case "enviado":
      icono = "🚚";
      mensaje = "Tu pedido está en camino";
      break;
    case "entregado":
      icono = "✅";
      mensaje = "Tu pedido ha sido entregado";
      break;
    case "cancelado":
      icono = "❌";
      mensaje = "Tu pedido fue cancelado";
      break;
    default:
      icono = "❓";
      mensaje = "Estado desconocido";
  }

  return (
    <div style={styles.card}>
      <h3>📦 Estado del pedido</h3>
      <p style={{ fontSize: "24px" }}>
        {icono} {mensaje}
      </p>
      {estado === "enviado" && (
        <p style={{ color: "blue", fontStyle: "italic" }}>
          ⏱️ Tiempo estimado de entrega: 2-3 días hábiles
        </p>
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
};

export default EstadoPedido;