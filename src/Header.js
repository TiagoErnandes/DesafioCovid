import React from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalApi } from './GlobalApi';

const Header = () => {

  const { paisSelecionado } = React.useContext(GlobalApi);
  const { pathname } = useLocation();
  let paisTitulo;
  (pathname === "/") ? paisTitulo = '' : paisTitulo = paisSelecionado;


  return (<>
    <header className="container">
      <h1>COVID 19 {paisTitulo}</h1>
    </header>
  </>)
}

export default Header
