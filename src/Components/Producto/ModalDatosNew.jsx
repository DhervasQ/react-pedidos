import React from "react";
import { useForm } from "react-hook-form";

const DIV_MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "grey",
  color:'white',
  padding: "50px",
  zIndex: 1000,
};

const ModalDatosNew = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const copiaPedidos = [...props.pedidos];
    copiaPedidos.map((elemento) => {
     
        return elemento;
      
    });
    const nuevo = {};
    nuevo.id = props.id;
    nuevo.name = data.name;
    nuevo.cantidad = data.cantidad;
    nuevo.comentarios = [];
     copiaPedidos.push(nuevo);
    props.setPedidos(copiaPedidos);
  };
  if (!props.open) return null;
  return (
    <div style={DIV_MODAL_STYLE}>
      <button onClick={props.close}>X</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <input type="number" {...register("cantidad")} />
        <button>Aceptar</button>

      </form>
      
    </div>
  );
};

export default ModalDatosNew;
