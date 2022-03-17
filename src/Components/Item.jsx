import * as React from 'react';
import '../App.css';
import {useState} from 'react';
import CartWidget from './CartWidget';
import { Card, Button } from 'react-bootstrap';


function Item({id,name, precio,img}) {
  return(
<>
<Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {img}
    </Card.Text>
    <Card.Text>
     Precio: ${precio}
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

</>)
  }
  
  export default Item;
  