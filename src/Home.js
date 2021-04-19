import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalApi } from './GlobalApi';
const Home = () => {
  const { paises: listaPais, setPaisSelecionado } = React.useContext(GlobalApi);
  let lista = [];
  const navigate = useNavigate();

  try {
    if (listaPais) {
      const result = Object.keys(listaPais).map(function (key) {
        return [String(key), listaPais[key]];
      });
      const novo = result.map((item) => item[0]);
      lista = novo;
    }
  } catch (er) {
    console.log(er)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPaisSelecionado((pais) => event.target[0].value);
    window.localStorage.setItem('pais', event.target[0].value);
    navigate('/casos')
  }


  return (<form onSubmit={handleSubmit} className="container">
    <select name="paises" id="paises">
      {lista.length && lista.map((pais) => {
        return (
          <option key={pais} value={pais}>{pais}</option>
        )
      })}
    </select>
    <button >Buscar</button>
  </form >
  )
}

export default Home
