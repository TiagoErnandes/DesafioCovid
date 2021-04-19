import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalApi } from './GlobalApi'
const Vacina = () => {
  const navigate = useNavigate();
  let { paisSelecionado } = React.useContext(GlobalApi);


  const [casos, setCasos] = React.useState();
  if (paisSelecionado === undefined) {
    paisSelecionado = window.localStorage.getItem('pais');
  }

  React.useEffect(() => {
    async function dadosPais(country) {
      const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`);
      const json = await response.json();
      setCasos(json)
      return json;
    }
    dadosPais(paisSelecionado)
  }, [paisSelecionado])



  if (casos !== undefined) {
    return (<><div className="container">
      <button className="btnInicio" onClick={() => navigate("/")}>Inicio</button><br></br>
      <button onClick={() => navigate('/casos')}>Casos</button><button onClick={() => navigate('/vacina')}>Vacinas</button>
      <p>Vacinas: </p>
      <ul>
        {casos && <li>População: {casos.All.population}</li>}
        {casos && <li>Pessoas Vacinadas: {casos.All.people_vaccinated}</li>}
        {casos && <li>Pessoas Parcialmente Vacinadas: {casos.All.people_partially_vaccinated}</li>}
      </ul>
    </div> </>)
  }
  return <div className="loading"></div>

}

export default Vacina
