import { useState, useEffect } from "react";

function useLocalStorage(clave, valorInicial) {
  // Función lazy para leer el valor inicial solo una vez
  const obtenerValor = () => {
    try {
      const item = localStorage.getItem(clave);
      if (item !== null) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.error(`Error al leer localStorage (clave: ${clave}):`, error);
    }
    return valorInicial;
  };

  const [valor, setValor] = useState(obtenerValor);

  // Sincronizar con localStorage cuando el valor cambie
  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error(`Error al guardar en localStorage (clave: ${clave}):`, error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;