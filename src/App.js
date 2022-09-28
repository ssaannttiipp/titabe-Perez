import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartProvider';
import Inicio from './components/Inicio/Inicio';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>¡La Solucion Para Tu Asador!</h3>

            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='productos' element={<ItemListContainer titulo={'Nuestros Productos'} />} />
              <Route path='detail/:id' element={<ItemDetailContainer />} />
              <Route path='/category/:categoryName' element={<ItemListContainer />} />
              <Route path='cart' element={<Cart />} />
              <Route path='contacto' element={'contacto'} />
            </Routes>

          </main>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
