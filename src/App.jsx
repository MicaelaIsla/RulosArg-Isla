import Nosotros from './Components/paginas/Nosotros';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
