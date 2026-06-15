function Alerta({ tipo = "info", titulo, children }) {
  const configuraciones = {
    exito: {
      icono: "✅",
      colorFondo: "#d4edda",
      colorBorde: "#28a745",
      colorTexto: "#155724",
    },
    advertencia: {
      icono: "⚠️",
      colorFondo: "#fff3cd",
      colorBorde: "#ffc107",
      colorTexto: "#856404",
    },
    error: {
      icono: "❌",
      colorFondo: "#f8d7da",
      colorBorde: "#dc3545",
      colorTexto: "#721c24",
    },
    info: {
      icono: "ℹ️",
      colorFondo: "#d1ecf1",
      colorBorde: "#17a2b8",
      colorTexto: "#0c5460",
    },
  };

  const estilo = configuraciones[tipo] || configuraciones.info;

  return (
    <div
      style={{
        backgroundColor: estilo.colorFondo,
        borderLeft: `4px solid ${estilo.colorBorde}`,
        color: estilo.colorTexto,
        padding: "12px 16px",
        margin: "8px 0",
        borderRadius: "4px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>{estilo.icono}</span>
        <strong>{titulo}</strong>
      </div>
      <div style={{ marginTop: "8px", marginLeft: "28px" }}>{children}</div>
    </div>
  );
}

export default Alerta;