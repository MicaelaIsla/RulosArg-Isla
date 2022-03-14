import * as React from 'react';
import '../App.css';
import {useState} from 'react';
import CartWidget from './CartWidget';
import { Card, Button } from 'react-bootstrap';
import fotoCat from '../fotoCat.jpg';

function Item({producto,name,description}) {
<>
<Card style={{ width: '18rem' }}>
<img src={fotoCat} alt="logo" />
  <Card.Body>
    <Card.Title>{producto.name}</Card.Title>
    <Card.Text>
     {producto.description}
    </Card.Text>
    <Button variant="primary">Agregar al carrito</Button>
  </Card.Body>
</Card>

</>
  }
  
  export default Item;
  