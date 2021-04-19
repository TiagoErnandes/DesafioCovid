import React from 'react';
import { GlobalApiCountry } from './GlobalApi';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vacina from './Vacina';
import PaginaError from './PaginaError';
import Casos from './Casos';
import './App.css'
import Header from './Header';



const App = () => {
  return (
    <GlobalApiCountry>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vacina" element={<Vacina />} />
          <Route path="casos" element={<Casos />} />
          <Route path="*" element={<PaginaError />} />
        </Routes>
      </BrowserRouter>
    </GlobalApiCountry>
  );
};

export default App;
