import React, { useState } from "react";
import Producto from "../Producto/Producto";
import { ContextPedidos } from "../../context/ContextPedidos";
const Pedidos = () => {
  const [users, setUsers] = useState([
    { id: 0, name: "Proveedor", activo: true },
    { id: 1, name: "Cliente", activo: false },
  ]);
  const [pedidos, setPedidos] = useState([
    {
      id: 0,
      name: "zapatos",
      cantidad: 2,
      comentarios: [{user:0,texto:"Muy buen producto"}, {user:0,texto:"Excelente"}, {user:1,texto:"Fatal"}],
    },
    {
      id: 1,
      name: "bolsos",
      cantidad: 9,
      comentarios: [{user:0,texto:"Genial"}, {user:0,texto:"Repetiré"}, {user:1,texto:"Nada recomendable"}],
    },
    {
      id: 2,
      name: "cinturones",
      cantidad: 4,
      comentarios: [{user:0,texto:"Justo lo que quería"}, {user:0,texto:"Muy elástico"}, {user:1,texto:"No me queda bien"}],
    },
  ]);

  const cambiarUsuarioActivo=()=>{
    const copiaUsuarios = [...users];
    copiaUsuarios.map((user)=>{user.activo=!user.activo})
    setUsers(copiaUsuarios)
  }
  return (
    <div>
      <ContextPedidos.Provider value={{ users, setUsers }}>
        <p className="texto">
          {users.map((user) => {
            if (user.activo === true) {
              return user.name;
            }
          })}
        </p>
        <p>Productos</p>
        <button onClick={cambiarUsuarioActivo}>Cambiar de usuario</button>
        <p>Pedidos</p>
        <Producto pedidos={pedidos} setPedidos={setPedidos}></Producto>

        <button className="logo">LOGO</button>
      </ContextPedidos.Provider>
    </div>
  );
};

export default Pedidos;
