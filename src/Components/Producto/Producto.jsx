import React, { useState } from "react";
import Comentarios from "../Comentarios/Comentarios";
import ModalDatos from "./ModalDatos";

const DIV_BUTTON_STYLE = {
  position: "relative",
  zIndex: 1,
};
const CONTENT_STYLE = {
  position: "relative",
  background: "grey",
  padding: "20px",
  zIndex: 2,
};




const Producto = (props) => {
  const eliminar = (id) => {
    const pedidosFiltrados = props.pedidos.filter((pedido) => pedido.id !== id);
    props.setPedidos([...pedidosFiltrados]);
  };
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      {props.pedidos &&
        props.pedidos.map((pedido) => (
          <div key={pedido.id}>
            <ModalDatos open={isOpen} close={() => setIsOpen(false)} setPedidos={props.setPedidos} pedidos={props.pedidos}  id={pedido.id}>
            </ModalDatos>
            <div  style={CONTENT_STYLE}>
            <button onClick={() => setIsOpen(true)}>
                M
              </button>
              <button onClick={() => eliminar(pedido.id)}>X</button>
              <p>{pedido.name}</p>
              <p>Cantidad:{pedido.cantidad}</p>
              <Comentarios setPedidos={props.setPedidos} pedidos={props.pedidos} id={pedido.id}></Comentarios>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Producto;
