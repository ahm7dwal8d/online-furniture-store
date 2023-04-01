import React, { useContext } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import About from './Pages/About';
import Product from './Pages/Proudct';
import CartPage from './Pages/Cart';
import CopyRight from './Components/CopyRight/CopyRight';
import ScrollButton from './Components/ScrollBtn';
import NotFound from './Components/NotFound';
import ProductDetails from './Components/ProductDetails';
import { AppContext } from './context/createContext';

function App() {
  const { theme, light, dark } = useContext(AppContext);
  console.log(light, dark)
  return (
    <div className={`App`} style={theme !== 'dark' ? light : dark}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='About' element={<About />} />
          <Route path='Product' element={<Product />} />
            <Route path='Product/:id' element={<ProductDetails />} />
          <Route path='CartPage' element={<CartPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <ScrollButton />
      <CopyRight />
    </div>
  );
}

export default App;
