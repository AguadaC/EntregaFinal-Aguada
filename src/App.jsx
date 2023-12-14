import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ShoppingCartContext from './context/ShoppingCartContext';

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartContext>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </ShoppingCartContext>
    </BrowserRouter>

  );
};

export default App;
