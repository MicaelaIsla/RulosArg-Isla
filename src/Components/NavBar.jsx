import * as React from 'react';
import logo from '../foto.png';
import '../App.css';
import Nosotros from './paginas/Nosotros';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function NavBar() {
  return (

    <div className="Logo-App">
      <header className="App-header">
           <ul  className="ul-productos">
         <li className="Li-productos"> <img src={logo} className="App-logo" alt="logo" /></li>
           <li className="Li-productos"> <a class="nav-link" href="../paginas/Nosotros.jsx">Nosotros</a></li>
           <li className="Li-productos"><a class="nav-link" href="../paginas/Catalogo.jsx">Catálogo</a></li>
           <li className="Li-productos"><a class="nav-link" href="../paginas/Carrito.jsx">Ver carrito</a></li>
       </ul>
  
      </header>

    </div>

    



  );
}

export default NavBar;

{/* prueba piloto de crear un navbar con boostrap
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
 */}