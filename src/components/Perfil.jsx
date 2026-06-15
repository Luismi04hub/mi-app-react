function Perfil() {
  const nombre = "Ana García";
  const profesion = "Desarrolladora Frontend";
  const experiencia = 5;
  const disponible = true;

  return (
    <div style={styles.card}>
      <h2>{nombre}</h2>
      <p>Profesión: {profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{disponible ? "✅ Disponible para contratar" : "❌ No disponible"}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default Perfil;