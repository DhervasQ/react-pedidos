import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextPedidos } from "../../context/ContextPedidos";

const DIV_MODAL_STYLE = {
  position: "fixed",
  top: "20%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 10000,
};

const ModalComentario = (props) => {
  const { register, handleSubmit } = useForm();
  const { users } = useContext(ContextPedidos);
  const usuarioActivo = users.filter((user) => user.activo === true)[0];
  const onSubmit = (nuevoComentario) => {
    const copiaPedidos = [...props.pedidos];

    copiaPedidos.map((elemento) => {
      if (elemento.id === props.id) {
        elemento.comentarios.push({
          user: usuarioActivo.id,
          texto: nuevoComentario.name,
        });
      }
      return elemento;
    });
    props.setPedidos(copiaPedidos);
  };

  const comentarios = props.pedidos[props.id].comentarios.filter(
    (comentario) => comentario.user === usuarioActivo.id
  );

  if (!props.open) return null;
  return (
    <div style={DIV_MODAL_STYLE}>
      <button onClick={props.close}>X</button>
      {comentarios &&
        comentarios.map((comentario) => (
          <div key={comentario.texto}>
            <p>{comentario.texto}</p>
          </div>
        ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button>Aceptar</button>
      </form>
    </div>
  );
};

export default ModalComentario;
