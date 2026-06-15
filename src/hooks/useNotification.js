import { useState, useEffect, useCallback } from "react";

function useNotification(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  const mostrar = useCallback(
    (mensaje, tipo = "info") => {
      const nuevaNotificacion = {
        id: Date.now(),
        mensaje,
        tipo,
      };
      setNotificacion(nuevaNotificacion);
    },
    []
  );

  const cerrar = useCallback(() => {
    setNotificacion(null);
  }, []);

  // Auto-cerrar después de la duración
  useEffect(() => {
    if (notificacion) {
      const timeoutId = setTimeout(() => {
        cerrar();
      }, duracion);

      // Limpieza: cancelar timeout si la notificación cambia o se desmonta
      return () => clearTimeout(timeoutId);
    }
  }, [notificacion, duracion, cerrar]);

  return {
    notificacion,
    mostrar,
    cerrar,
  };
}

export default useNotification;