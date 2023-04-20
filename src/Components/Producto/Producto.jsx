import React, { useState } from "react";
import Comentarios from "../Comentarios/Comentarios";
import ModalDatos  from "./ModalDatos";
import ModalDatosNew from "./ModalDatosNew";

const CONTENT_STYLE = {
  position: "relative",
  padding: "20px",
  zIndex: 2,
};

const Producto = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const eliminar = (id) => {
    const pedidosFiltrados = props.pedidos.filter((pedido) => pedido.id !== id);
    props.setPedidos(pedidosFiltrados);
  };

  return (
    <div className="contenedor">
      {props.pedidos &&
        props.pedidos.map((pedido) => (
          <div key={pedido.id}  className="product-style">
            <ModalDatos
              open={isOpen}
              close={() => setIsOpen(false)}
              setPedidos={props.setPedidos}
              pedidos={props.pedidos}
              id={pedido.id}
            ></ModalDatos>
            <div style={CONTENT_STYLE}>
            
              <button onClick={() => setIsOpen(true)}><img src='./pen29.png' alt="Modificar"></img></button>
              <button onClick={() => eliminar(pedido.id)}><img src='./delete30.png' alt="Eliminar"></img></button>
              <p>{pedido.name}</p>
              <p>Cantidad:{pedido.cantidad}</p>
              <Comentarios
                setPedidos={props.setPedidos}
                pedidos={props.pedidos}
                id={pedido.id}
              ></Comentarios>
            </div>
          </div>
        ))}
      <button className="Nuevo producto"  onClick={() => setIsOpenNew(true)}>
        Nuevo producto
      </button>
      <ModalDatosNew
              open={isOpenNew}
              close={() => setIsOpenNew(false)}
              setPedidos={props.setPedidos}
              pedidos={props.pedidos}
              id={props.pedidos.length}
            ></ModalDatosNew>
    </div>
  );
};

export default Producto;
