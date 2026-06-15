import { useState, useEffect } from "react";

function TemporizadorPomodoro() {
  const [tiempo, setTiempo] = useState(1500); // 25 minutos = 1500 segundos
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((prev) => prev - 1);
      }, 1000);
    } else if (tiempo === 0 && activo) {
      // Cuando llega a cero, mostrar alerta y detener
      alert("⏰ ¡Tiempo completado! ¡Descanso!");
      setActivo(false);
    }

    // Función de limpieza: cancela el intervalo
    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [activo, tiempo]);

  const formatearTiempo = () => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  };

  const iniciar = () => {
    if (tiempo > 0) setActivo(true);
  };

  const pausar = () => {
    setActivo(false);
  };

  const reiniciar = () => {
    setActivo(false);
    setTiempo(1500);
  };

  const getProgreso = () => {
    return ((1500 - tiempo) / 1500) * 100;
  };

  return (
    <div style={styles.card}>
      <h3>🍅 Temporizador Pomodoro</h3>
      <div style={styles.timerDisplay}>
        <span style={styles.timerText}>{formatearTiempo()}</span>
      </div>
      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progressFill,
            width: `${getProgreso()}%`,
          }}
        />
      </div>
      <div>
        <button onClick={iniciar} style={styles.buttonSuccess}>
          ▶ Iniciar
        </button>
        <button onClick={pausar} style={styles.buttonWarning}>
          ⏸ Pausar
        </button>
        <button onClick={reiniciar} style={styles.buttonDanger}>
          🔄 Reiniciar
        </button>
      </div>
      <p style={styles.info}>
        {activo ? "⏳ Temporizador en marcha..." : "⏹️ Temporizador pausado"}
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
    textAlign: "center",
  },
  timerDisplay: {
    margin: "20px 0",
  },
  timerText: {
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  progressBar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
    margin: "16px 0",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#28a745",
    transition: "width 0.3s ease",
  },
  buttonSuccess: {
    margin: "8px",
    padding: "8px 16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonWarning: {
    margin: "8px",
    padding: "8px 16px",
    backgroundColor: "#ffc107",
    color: "#333",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonDanger: {
    margin: "8px",
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  info: {
    marginTop: "16px",
    fontSize: "14px",
    color: "#666",
  },
};

export default TemporizadorPomodoro;