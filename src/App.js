import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='About' element={<About />} />
          <Route path='Product' element={<Product />} />
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
