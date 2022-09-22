import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>¡La Solucion Para Tu Asador!</h3>

          <Routes>
            <Route path='/' element={'inicio'} />
            <Route path='productos' element={<ItemListContainer titulo={'Nuestros Productos'} />} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path='contacto' element={'contacto'} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={'el carrito'} />
          </Routes>

        </main>
        <footer>
          <h2>footer</h2>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
