import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Us from './Components/Us/Us';
import Contact from './Components/Contact/Contact';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './Components/Store/CartContext';
import firestoreDB from './services/firebase';
import Checkout from './Components/Cart/Checkout';
import Footer from './Components/Footer/Footer';



function App() {
  console.log(firestoreDB)
  return (
    <div>
        <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route index path="/" element={<Home/>} />
              <Route index path="/us" element={<Us/>} />
              <Route path="/shop" element={<ItemListContainer/>} />
              <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
              <Route path="/category/:category" element={<ItemListContainer/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
            </Routes>
            <Footer/>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
