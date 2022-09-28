import logo from '../logo.svg';
import { CartWidget } from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from './context/CartContext';
import { useState } from "react";
import './NavBar.css'

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu)
  }

  const { cart } = useContext(CartContext);
  return (
    <div className="navbar-container">
      <NavLink to={'/'}><img src={logo} className="App-logo-navBar" alt='logo' /></NavLink>
      <button onClick={toggleMenu} className="cabeceraBoton">
        <svg className="cabeceraSvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <nav className={`listaNav ${menu ? "isActive" : ""}`}>
      <ul className="lista">
        <li >
          <NavLink to={'/'} className="enlace" >
            Inicio
          </NavLink>
        </li >
        <li>
          <NavLink to={'/productos'} className="enlace">
            Productos
          </NavLink>

        </li>
        <li>
          <NavLink to={'/contacto'} className="enlace">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to={'/category/Asador'} className="enlace">
            Asador
          </NavLink>
        </li>

        <li>
          <NavLink to={'/category/Maderas'} className="enlace">
            Maderas
          </NavLink>
        </li>

        <li>
          <NavLink to={'/category/Accesorios'} className="enlace">
            Accesorios
          </NavLink>
        </li>

        <li>
          {cart.length > 0 ?
            <NavLink to={"/cart"}>
               
              <CartWidget />
            </NavLink>
            : ""}
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar;