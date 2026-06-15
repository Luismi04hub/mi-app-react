function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    {
      id: 2,
      titulo: "Hacer ejercicio",
      completada: true,
      prioridad: "media",
    },
    { id: 3, titulo: "Comprar comida", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Leer libro", completada: true, prioridad: "alta" },
    { id: 5, titulo: "Pagar facturas", completada: false, prioridad: "alta" },
    { id: 6, titulo: "Llamar a mamá", completada: false, prioridad: "media" },
    { id: 7, titulo: "Limpiar casa", completada: true, prioridad: "baja" },
  ];

  const pendientes = tareas.filter((tarea) => !tarea.completada);
  const completadas = tareas.filter((tarea) => tarea.completada);

  const getPrioridadStyle = (prioridad) => {
    if (prioridad === "alta") return { color: "red", fontWeight: "bold" };
    if (prioridad === "media") return { color: "orange" };
    return { color: "gray" };
  };

  return (
    <div style={styles.card}>
      <h3>✅ Lista de tareas</h3>

      <div>
        <h4>
          📋 Tareas pendientes ({pendientes.length})
          {pendientes.length === 0 && (
            <span style={{ marginLeft: "10px", color: "gray" }}>
              - No hay tareas pendientes
            </span>
          )}
        </h4>
        {pendientes.length > 0 && (
          <ul>
            {pendientes.map((tarea) => (
              <li key={tarea.id} style={getPrioridadStyle(tarea.prioridad)}>
                {tarea.titulo} - Prioridad: {tarea.prioridad}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h4>
          ✅ Tareas completadas ({completadas.length})
          {completadas.length === 0 && (
            <span style={{ marginLeft: "10px", color: "gray" }}>
              - No hay tareas completadas
            </span>
          )}
        </h4>
        {completadas.length > 0 && (
          <ul>
            {completadas.map((tarea) => (
              <li
                key={tarea.id}
                style={{ textDecoration: "line-through", color: "gray" }}
              >
                {tarea.titulo}
              </li>
            ))}
          </ul>
        )}
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
};

export default ListaTareas;