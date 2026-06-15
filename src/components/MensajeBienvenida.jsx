function MensajeBienvenida() {
  // Prueba con null o con un objeto
  const usuario = null; // Cambia a { nombre: "Carlos", rol: "admin" }

  if (usuario === null) {
    return (
      <div style={styles.card}>
        <p>🔐 Por favor, inicia sesión para continuar</p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === "admin" && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🛠️ Tienes acceso completo al sistema
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

export default MensajeBienvenida;