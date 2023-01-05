
import './App.css';
import Navbar from './components/navegacion/Navbar';
import inicio from './components/paginas/inicio';
import remeras from './components/paginas/remeras';
import tazas from './components/paginas/tazas';
import Cards from './components/Cards/Cards';
import FlexWrapper from './components/flexWrapper/flexWrapper'
import Button from './components/button/Button';

import imgRemeras from './assets/img/Remeras.png'
import GRIZZY from './assets/img/GRIZZY.png'
import TazaRafa from './assets/img/TazaRafa.png'

function App() {
  return (
    <>
      <div className="App">
          <Navbar/>
         
      </div>
      <hr/>
      <FlexWrapper>
        <Cards
        title="Remeras"
        price={2000}
        detail="Remera de Gato"
        imgurl={imgRemeras}/>
         <Cards
        title="Taza de Spiderman"
        price={1200}
        detail="Taza Rafa 250ml"
        imgurl={TazaRafa}/>
         <Cards
        title="Set de Jardin"
        price={500}
        detail="Set de Jardin completo"
        imgurl={GRIZZY}/>
       
      </FlexWrapper>
      
       
      
    </>
  );
}


export default App;
