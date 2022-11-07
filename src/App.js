
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
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
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
