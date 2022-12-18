import './App.css';
import Lista from './Components/Lista/Lista';
import Szűrő from './Components/Szűrő/Szűrő';
import Űrlap from './Components/Űrlap/Űrlap';

function App() {
  return (
    <div className="App">
      <h1>Ajándéklista</h1>
      <Űrlap />
      <Lista />
      <Szűrő />
    </div>
  );
}

export default App;
