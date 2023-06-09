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
import HomeProduct from "./Components/HomeProduct"
import FeaturePage from './Pages/Feature';
import CollectionPage from './Pages/CollectionPage';
import CollectionItem from './Components/Collection/CollectionItem';
import { AppContext } from './context/createContext';

function App() {
  const { theme, Theme } = useContext(AppContext);
  return (
    <div className={`App ${theme}`} style={{color: Theme[`${theme}`]['color'], backgroundColor: Theme[`${theme}`]['bg'], transition: "all 1s ease"}}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='About' element={<About />} />
          <Route path='Product' element={<Product />} />
          <Route path='Feature' element={<FeaturePage />} />
          <Route path='Collection' element={<CollectionPage />} />
            <Route path='collection/:id' element={<CollectionItem />} />
          <Route path='Product/:id' element={<ProductDetails />} />
          <Route path='Home/:id' element={<HomeProduct />} />
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
