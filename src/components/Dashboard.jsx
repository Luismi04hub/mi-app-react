function Dashboard() {
  const usuario = {
    nombre: "María López",
    email: "maria@example.com",
    rol: "admin",
  };

  const notificaciones = [
    { id: 1, mensaje: "Tienes un nuevo mensaje", leida: false },
    { id: 2, mensaje: "Tu tarea fue asignada", leida: true },
    { id: 3, mensaje: "Reunión a las 3pm", leida: false },
    { id: 4, mensaje: "Actualización disponible", leida: true },
  ];

  const actividadReciente = [
    { id: 1, accion: "Creó un proyecto", fecha: "2024-03-15" },
    { id: 2, accion: "Actualizó perfil", fecha: "2024-03-14" },
    { id: 3, accion: "Comentó en un issue", fecha: "2024-03-13" },
  ];

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <>
      <div style={styles.card}>
        <h3>👤 Información del usuario</h3>
        <p>
          <strong>Nombre:</strong> {usuario.nombre}
        </p>
        <p>
          <strong>Email:</strong> {usuario.email}
        </p>
        <p>
          <strong>Rol:</strong> {usuario.rol}
        </p>
      </div>

      <div style={styles.card}>
        <h3>
          🔔 Notificaciones{" "}
          {noLeidas > 0 && (
            <span style={{ color: "red", fontSize: "14px" }}>
              ({noLeidas} no leídas)
            </span>
          )}
        </h3>
        {notificaciones.length === 0 ? (
          <p>No tienes notificaciones</p>
        ) : (
          <ul>
            {notificaciones.map((noti) => (
              <li
                key={noti.id}
                style={{
                  fontWeight: noti.leida ? "normal" : "bold",
                  opacity: noti.leida ? 0.6 : 1,
                }}
              >
                {noti.mensaje}
              </li>
            ))}
          </ul>
        )}
        {noLeidas === 0 && notificaciones.length > 0 && (
          <p style={{ color: "green", fontSize: "14px" }}>
            ✅ No tienes notificaciones pendientes
          </p>
        )}
      </div>

      <div style={styles.card}>
        <h3>🕒 Actividad reciente</h3>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((act) => (
              <li key={act.id}>
                {act.accion} - {act.fecha}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    backgroundColor: "#f9f9f9",
  },
};

export default Dashboard;