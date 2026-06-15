function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 899.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.5, disponible: true },
    { id: 3, nombre: "Teclado", precio: 65.0, disponible: false },
    { id: 4, nombre: "Monitor", precio: 199.99, disponible: true },
    { id: 5, nombre: "Audífonos", precio: 45.75, disponible: false },
  ];

  return (
    <div style={styles.card}>
      <h3>🛒 Lista de productos</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td
                style={{
                  color: producto.disponible ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {producto.disponible ? "Disponible" : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default ListaProductos;