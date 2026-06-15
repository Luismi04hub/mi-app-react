import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

function Contador() {
  const [valor, setValor] = useState(0);

  const decrementar = () => {
    setValor((prev) => prev - 1);
  };

  const incrementar = () => {
    setValor((prev) => prev + 1);
  };

  const incrementarCinco = () => {
    setValor((prev) => prev + 5);
  };

  const reiniciar = () => {
    setValor((prev) => 0);
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>Contador: {valor}</h3>
      <div>
        <BotonAccion
          texto="-1"
          variante="secundario"
          disabled={valor === 0}
          onClick={decrementar}
        />
        <BotonAccion texto="+1" variante="primario" onClick={incrementar} />
        <BotonAccion texto="+5" variante="primario" onClick={incrementarCinco} />
        <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />
      </div>
      {valor === 0 && (
        <Alerta tipo="info" titulo="Información">
          El contador está en cero
        </Alerta>
      )}
      {valor > 10 && (
        <Alerta tipo="advertencia" titulo="¡Cuidado!">
          ¡Valor alto!
        </Alerta>
      )}
    </div>
  );
}

export default Contador;