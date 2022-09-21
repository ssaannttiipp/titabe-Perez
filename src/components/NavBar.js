import logo from '../logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to={'/'}><img src={logo} className="App-logo-navBar" alt='logo' /></NavLink>

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

      </ul>
      <Link to={'cart'} className="enlace"><CartWidget /></Link>

    </div>
  )
}

export default NavBar;