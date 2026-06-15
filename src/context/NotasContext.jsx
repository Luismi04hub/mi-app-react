import { createContext, useContext, useReducer, useEffect } from "react";

// Estado inicial con notas precargadas
const estadoInicial = {
  notas: [
    {
      id: "1",
      titulo: "Revisión de proyecto",
      contenido: "Revisar el avance del proyecto final con el equipo de desarrollo. Asegurarse de que todas las tareas estén completadas.",
      categoria: "trabajo",
      fijada: true,
      fechaCreacion: new Date("2026-03-10").toString(),
    },
    {
      id: "2",
      titulo: "Estudiar React Hooks",
      contenido: "Practicar useState, useEffect y aprender useReducer y useContext para el proyecto final.",
      categoria: "estudio",
      fijada: true,
      fechaCreacion: new Date("2026-03-12").toString(),
    },
    {
      id: "3",
      titulo: "Comprar víveres",
      contenido: "Leche, huevos, pan, frutas y verduras para la semana.",
      categoria: "personal",
      fijada: false,
      fechaCreacion: new Date("2026-03-14").toString(),
    },
    {
      id: "4",
      titulo: "Idea para nueva app",
      contenido: "Crear una aplicación de gestión de tareas con notificaciones en tiempo real.",
      categoria: "ideas",
      fijada: false,
      fechaCreacion: new Date("2026-03-13").toString(),
    },
    {
      id: "5",
      titulo: "Reunión con cliente",
      contenido: "Presentar el prototipo de la aplicación. Llevar laptop y proyector.",
      categoria: "trabajo",
      fijada: false,
      fechaCreacion: new Date("2026-03-11").toString(),
    },
  ],
  filtroCategoria: "todas",
  busqueda: "",
};

// Reducer
function notasReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_NOTA": {
      return {
        ...state,
        notas: [action.payload, ...state.notas],
      };
    }

    case "ELIMINAR_NOTA": {
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.payload),
      };
    }

    case "EDITAR_NOTA": {
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload.id
            ? { ...nota, ...action.payload.datos }
            : nota
        ),
      };
    }

    case "TOGGLE_FIJADA": {
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload
            ? { ...nota, fijada: !nota.fijada }
            : nota
        ),
      };
    }

    case "CAMBIAR_FILTRO": {
      return {
        ...state,
        filtroCategoria: action.payload,
      };
    }

    case "CAMBIAR_BUSQUEDA": {
      return {
        ...state,
        busqueda: action.payload,
      };
    }

    default:
      return state;
  }
}

// Crear Context
const NotasContext = createContext();

// Provider
export function NotasProvider({ children }) {
  const [state, dispatch] = useReducer(notasReducer, estadoInicial);

  // Funciones de acción
  const agregarNota = (nota) => {
    dispatch({ type: "AGREGAR_NOTA", payload: nota });
  };

  const eliminarNota = (id) => {
    dispatch({ type: "ELIMINAR_NOTA", payload: id });
  };

  const editarNota = (id, datos) => {
    dispatch({ type: "EDITAR_NOTA", payload: { id, datos } });
  };

  const toggleFijada = (id) => {
    dispatch({ type: "TOGGLE_FIJADA", payload: id });
  };

  const cambiarFiltro = (categoria) => {
    dispatch({ type: "CAMBIAR_FILTRO", payload: categoria });
  };

  const cambiarBusqueda = (texto) => {
    dispatch({ type: "CAMBIAR_BUSQUEDA", payload: texto });
  };

  return (
    <NotasContext.Provider
      value={{
        notas: state.notas,
        filtroCategoria: state.filtroCategoria,
        busqueda: state.busqueda,
        agregarNota,
        eliminarNota,
        editarNota,
        toggleFijada,
        cambiarFiltro,
        cambiarBusqueda,
      }}
    >
      {children}
    </NotasContext.Provider>
  );
}

// Custom hook
export function useNotas() {
  const context = useContext(NotasContext);
  if (!context) {
    throw new Error("useNotas debe usarse dentro de un NotasProvider");
  }
  return context;
}