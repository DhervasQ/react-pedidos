import React from "react";
import { useForm } from "react-hook-form";

const DIV_MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

const ModalDatos = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const copiaPedidos = [...props.pedidos];
    copiaPedidos.map((elemento) => {
      if (elemento.id === props.id) {
        elemento.name = data.name;
        elemento.cantidad = data.cantidad;
      }
      return elemento;
    });
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
        <p>{props.id}</p>
      </form>
    </div>
  );
};

export default ModalDatos;
