import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import LoginSignup from './pages/LoginSignup'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Footer from './components/footer/Footer'
import men_banner from '../src/assets/hand.jpg'
import women_banner from '../src/assets/hand.jpg'
import kid_banner from '../src/assets/hand.jpg'
import ShopContextProvider from './Context/ShopContext';
function App() {
  return (
    <>
 
      <BrowserRouter>
      <ShopContextProvider>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
    <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
    <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    <Route path=':productId' element={<Product/>}/>

    </Routes>
    <Footer/>
    </ShopContextProvider>
    </BrowserRouter>

    </>
  );
}

export default App;
