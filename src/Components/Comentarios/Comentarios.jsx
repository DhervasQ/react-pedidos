import React,{useState} from "react";
import ModalComentario from "./ModalComentario";

const Comentarios = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Comentario</button>
      <ModalComentario open={isOpen} close={() => setIsOpen(false)} setPedidos={props.setPedidos} pedidos={props.pedidos}  id={props.id}></ModalComentario>
    </div>
  );
};

export default Comentarios;
