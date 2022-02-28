
import * as React from 'react';
import fotoCat from '../fotoCat.jpg';
import '../App.css';
import Nosotros from './paginas/Nosotros';
import CartWidget from './CartWidget';
import { Card, Button } from 'react-bootstrap';



function ItemListContainer() {
  return (
    <>
   <h3>Aqui va a ir el listado de productos disponibles en la tienda</h3>
<Card style={{ width: '18rem' }}>
<img src={fotoCat} alt="logo" />
  <Card.Body>
    <Card.Title>Shampoo Veganis</Card.Title>
    <Card.Text>
     Producto apto para Low Pow
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

<br />
<Card style={{ width: '18rem' }}>
<img src={fotoCat} alt="logo" />
  <Card.Body>
    <Card.Title>Shampoo Veganis</Card.Title>
    <Card.Text>
     Producto apto para Low Pow
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>


</>

);
}

export default ItemListContainer;

