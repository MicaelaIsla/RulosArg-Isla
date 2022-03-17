import Nosotros from './Components/paginas/Nosotros';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

import ItemCount from './Components/ItemCount';
import ItemList from './Components/ItemList';
import Item from './Components/Item';
import { ItemListContainer } from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
    <ItemCount/>
    <ItemList/>
    
    </div>
  );
}

export default App;
