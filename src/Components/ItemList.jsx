import * as React from 'react';
import '../App.css';
import {useState} from 'react';
import ItemListContainer from './ItemListContainer';
import Item from './Item';

function ItemList({producto}) {
  return(

<div className='row'>
  {producto.map((producto)=> <Item key={producto.key} />)}
</div>
  )
}


  export default ItemList;
  