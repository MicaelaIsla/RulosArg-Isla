
import * as React from 'react';
import fotoCat from '../fotoCat.jpg';
import '../App.css';
import Nosotros from './paginas/Nosotros';
import CartWidget from './CartWidget';
import { Card, Button } from 'react-bootstrap';
import ItemList from './ItemList';
import Item from './Item';
import { useState } from 'react';


function ItemListContainer() {

  const producto = (id, name,description, stock)=> ({
    id: id,
    name: name,
    description: description,
    stock: stock,
  });

  const promesa = new Promise ((res,rej ) => {
    setTimeout(() =>{ 
      res(producto(1, "Shampoo veganis", "Apto Low pow",14));
    }, 3000);
  });

 // promesa.then(res)=>{
 //   console.log(res)
 // }

//[producto, setProducto]= useState ([0])


  return (
    <>
   <h3>Aqui van a estar los productos</h3>
<Item />



</>

);
}

export default ItemListContainer;

