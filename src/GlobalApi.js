import React from 'react';

export const GlobalApi = React.createContext();

export const GlobalApiCountry = ({ children }) => {
  const [paises, setPaises] = React.useState(null);
  const [referencia, setReferencia] = React.useState();
  const [paisSelecionado, setPaisSelecionado] = React.useState();



  React.useEffect(() => {
    fetch('https://covid-api.mmediagroup.fr/v1/cases?country')
      .then((response) => response.json())
      .then((json) => setPaises(json))
      .then((ref) => setReferencia(ref))
  }, []);


  return (
    <GlobalApi.Provider value={{ referencia, paises, setPaisSelecionado, paisSelecionado }}>
      {children}
    </GlobalApi.Provider>
  );
};
