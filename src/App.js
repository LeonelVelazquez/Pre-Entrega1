
import './App.css';
import { BrowserRouter as Router, Swich, Route} from 'react-router-dom'
import navbar from './components/navegacion/navbar';
import inicio from './components/paginas/inicio';
import remeras from './components/paginas/remeras';
import tazas from './components/paginas/tazas';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <navbar/>
        </Router>
        

      </div>

    </>
  );
}


export default App;
