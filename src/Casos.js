import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalApi } from './GlobalApi'

const Informacao = () => {
  const navigate = useNavigate();
  let { paisSelecionado } = React.useContext(GlobalApi);
  const [casos, setCasos] = React.useState();
  const [estados, setEstados] = React.useState();


  if (paisSelecionado === undefined) {
    paisSelecionado = window.localStorage.getItem('pais');
  }
  React.useEffect(() => {
    async function dadosPais(country) {
      const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`);
      const json = await response.json();
      setCasos(json);

      try {
        if (json) {
          const result = Object.keys(json).map(function (key) {
            return [String(key), json[key]];
          });
          const novo = result.map((item) => item[0]);
          novo.shift();
          setEstados(novo)
        }
      } catch (er) {
        console.log(er)
      }


    }
    dadosPais(paisSelecionado)
  }, [])



  if (casos !== undefined) {
    return (<><div className="container">
      <button className="btnInicio" onClick={() => navigate("/")}>Inicio</button><br></br>
      <button onClick={() => navigate('/casos')}>Casos</button><button onClick={() => navigate('/vacina')}>Vacinas</button>
      <p>Casos: </p>
      <ul>
        {casos && <li>População: {casos.All.population}</li>}
        {casos && <li>Confirmados: {casos.All.confirmed}</li>}
        {casos && <li>Recuperados: {casos.All.recovered}</li>}
        {casos && <li>Mortes: {casos.All.deaths}</li>}
        {casos && <li>Expectativa de vida: {casos.All.life_expectancy}%</li>}
      </ul>
      {estados ?
        <ul className="estados">
          {estados.map((estado) => <li key={estado}>{estado}</li>)}
        </ul>
        : ''}
    </div></>)
  }
  return <div className="loading"></div>

}

export default Informacao
