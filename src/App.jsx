import Nosotros from './Components/paginas/Nosotros';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
    <ItemCount/>
    </div>
  );
}

export default App;
