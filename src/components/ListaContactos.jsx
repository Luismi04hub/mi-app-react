import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";
import Modal from "./Modal";

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Ana García", telefono: "555-1234", favorito: true },
    { id: 2, nombre: "Carlos López", telefono: "555-5678", favorito: false },
    { id: 3, nombre: "María Martínez", telefono: "555-9012", favorito: true },
    { id: 4, nombre: "Juan Pérez", telefono: "555-3456", favorito: false },
    { id: 5, nombre: "Laura Sánchez", telefono: "555-7890", favorito: true },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [mostrarSoloFavoritos, setMostrarSoloFavoritos] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  const toggleFavorito = (id) => {
    setContactos((prevContactos) =>
      prevContactos.map((contacto) =>
        contacto.id === id
          ? { ...contacto, favorito: !contacto.favorito }
          : contacto
      )
    );
  };

  const eliminarContacto = (id) => {
    setContactos((prevContactos) =>
      prevContactos.filter((contacto) => contacto.id !== id)
    );
    setContactoAEliminar(null);
  };

  const contactosFiltrados = contactos.filter((contacto) => {
    const coincideBusqueda =
      contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      contacto.telefono.includes(busqueda);
    const coincideFiltro = mostrarSoloFavoritos ? contacto.favorito : true;
    return coincideBusqueda && coincideFiltro;
  });

  const totalFavoritos = contactos.filter((c) => c.favorito).length;

  return (
    <div style={{ padding: "16px" }}>
      <h3>📞 Lista de Contactos</h3>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Buscar por nombre o teléfono..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "8px",
            width: "100%",
            maxWidth: "300px",
            marginRight: "10px",
          }}
        />
        <BotonAccion
          texto={mostrarSoloFavoritos ? "Mostrar todos" : "Mostrar favoritos"}
          variante="secundario"
          onClick={() => setMostrarSoloFavoritos(!mostrarSoloFavoritos)}
        />
      </div>

      <p>
        📊 Total contactos: {contactos.length} | ⭐ Favoritos: {totalFavoritos} |
        🔍 Resultados: {contactosFiltrados.length}
      </p>

      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info" titulo="Sin resultados">
          No se encontraron contactos
        </Alerta>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {contactosFiltrados.map((contacto) => (
            <li
              key={contacto.id}
              style={{
                border: "1px solid #ddd",
                margin: "8px 0",
                padding: "12px",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{contacto.nombre}</strong>
                <br />
                <span style={{ color: "#666" }}>{contacto.telefono}</span>
              </div>
              <div>
                <span
                  onClick={() => toggleFavorito(contacto.id)}
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    marginRight: "12px",
                  }}
                >
                  {contacto.favorito ? "⭐" : "☆"}
                </span>
                <BotonAccion
                  texto="Eliminar"
                  variante="peligro"
                  onClick={() => setContactoAEliminar(contacto)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      <Modal
        titulo="Confirmar eliminación"
        abierto={contactoAEliminar !== null}
        onClose={() => setContactoAEliminar(null)}
      >
        <p>
          ¿Estás seguro de eliminar a {contactoAEliminar?.nombre}? Esta acción
          no se puede deshacer.
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <BotonAccion
            texto="Cancelar"
            variante="secundario"
            onClick={() => setContactoAEliminar(null)}
          />
          <BotonAccion
            texto="Eliminar"
            variante="peligro"
            onClick={() => eliminarContacto(contactoAEliminar.id)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default ListaContactos;