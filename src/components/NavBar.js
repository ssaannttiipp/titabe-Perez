import logo from '../logo.svg'

const NavBar=()=>{
    return(
        <div className="navbar-container">
        <img src={logo} className="App-logo-navBar" alt='logo' />
          <ul className="lista">
            <li >
               <a href="./index.html" className="enlace">Inicio</a> 
            </li >
            <li>
            <a href="./pages/catalogo.html" className="enlace">Catalogo</a> 
            </li>
            <li>
            <a href="./pages/conocenos.html" className="enlace">Conocenos</a> 
            </li>
          </ul>


        </div>
    )
}

export default NavBar;