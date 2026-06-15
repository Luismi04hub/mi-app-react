function Clima() {
  const temperatura = 28;

  let sensacion = "";
  let recomendacion = "";

  if (temperatura < 15) {
    sensacion = "❄️ Frío";
    recomendacion = "Lleva abrigo";
  } else if (temperatura >= 15 && temperatura <= 25) {
    sensacion = "😊 Agradable";
    recomendacion = "Disfruta el día";
  } else {
    sensacion = "🔥 Caluroso";
    recomendacion = "Mantente hidratado";
  }

  return (
    <div style={styles.card}>
      <h3>🌤️ Clima actual</h3>
      <p>Temperatura: {temperatura}°C</p>
      <p>Sensación: {sensacion}</p>
      <p>Recomendación: {recomendacion}</p>
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

export default Clima;