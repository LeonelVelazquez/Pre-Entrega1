
import './App.css';
import Navbar from './components/navegacion/Navbar';
import inicio from './components/paginas/inicio';
import remeras from './components/paginas/remeras';
import tazas from './components/paginas/tazas';
import Cards from './components/Cards/Cards';
import flexWrapper from './components/flexWrapper/flexWrapper'


function App() {
  return (
    <>
      <div className="App">
          <Navbar/>
         
      </div>

      <flexWrapper>
        <Cards
        title="Remeras"
        price={500}
        detail="Remera de Gato"
        img=""/>
        <Cards/>
        <Cards/>
      </flexWrapper>
      
      
    </>
  );
}


export default App;
