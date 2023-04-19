import React, { useState } from "react";
import Producto from "../Producto/Producto";
import { ContextPedidos } from "../../context/ContextPedidos";
const Pedidos = () => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "Proveedor",
      activo: true,
      globalStyle: {
        background: "#e74c3c",
      },
      buttonStyle: {
        background: "#c0392b",
      },
      backgroundStyle: {
        background: "rgba(143, 27, 15, 0.8)",
      },
    },
    {
      id: 1,
      name: "Cliente",
      activo: false,
      globalStyle: {
        background: "#3CE7A1",
      },
      buttonStyle: {
        background: "#2BC098",
      },
      backgroundStyle: {
        background: "rgba(15, 143, 108, 0.8)",
      },
    },
  ]);
  const [pedidos, setPedidos] = useState([
    {
      id: 0,
      name: "zapatos",
      cantidad: 2,
      comentarios: [
        { user: 0, texto: "Muy buen producto" },
        { user: 0, texto: "Excelente" },
        { user: 1, texto: "Fatal" },
      ],
    },
    {
      id: 1,
      name: "bolsos",
      cantidad: 9,
      comentarios: [
        { user: 0, texto: "Genial" },
        { user: 0, texto: "Repetiré" },
        { user: 1, texto: "Nada recomendable" },
      ],
    },
    {
      id: 2,
      name: "cinturones",
      cantidad: 4,
      comentarios: [
        { user: 0, texto: "Justo lo que quería" },
        { user: 0, texto: "Muy elástico" },
        { user: 1, texto: "No me queda bien" },
      ],
    },
  ]);

  const cambiarUsuarioActivo = () => {
    const copiaUsuarios = [...users];
    copiaUsuarios.map((user) => {
      user.activo = !user.activo;
      if (user.activo === true) {
        document.body.style.backgroundColor = user.globalStyle.background;
        var botones = document.querySelectorAll("button"); 
        var btnsArr = Array.prototype.slice.call(botones);
        btnsArr.map((boton)=>{
          boton.style.background = user.buttonStyle.background;
        })
      }
    });
    setUsers(copiaUsuarios);
  };
  return (
    <div>
      <ContextPedidos.Provider value={{ users }}>
        <p className="texto">
          {users.map((user) => {
            if (user.activo === true) {
              return user.name;
            }
          })}
        </p>
        <p>Productos</p>
        <button type="button"  onClick={cambiarUsuarioActivo}>Cambiar de usuario</button>
        <p>Pedidos</p>
        <Producto pedidos={pedidos} setPedidos={setPedidos}></Producto>
      
      </ContextPedidos.Provider>
    </div>
  );
};

export default Pedidos;
