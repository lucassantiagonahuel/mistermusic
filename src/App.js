
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartContextProvider} from "./Storage/CartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer/>}
              />
              <Route
                path="/category/:categoryid"
                element={<ItemListContainer/>}
              />
              <Route
                path="/detalle/:id"
                element={<ItemDetailContainer/>}
              />
              <Route 
                path="/cart" element={<CartView />} 
              />
              <Route
                path="/checkout/:orderid"
                element={<h1>Gracias por tu compra</h1>}
              />
              <Route 
                path="*" 
                element={<h1>404: Ruta no encontrada</h1>} 
              />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
