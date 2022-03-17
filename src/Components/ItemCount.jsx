import * as React from 'react';
import '../App.css';
import {useState} from 'react';

function ItemCount() {
const [contador,setContador]=useState (1)


const stock = {stock}

    return (  
      <div className='fondoContador'>
      <div className='boxContador'>
       <div className="divContador" onClick={()=> { contador!== stock ? setContador(contador+1): setContador(contador)}}>+</div>
       <div className="contador"> { contador }</div>
       <div className="divContador"  onClick={()=> { contador!== 0 ? setContador(contador-1): setContador(contador)}}>-</div>
      </div>
      </div>
    );
  }
  
  export default ItemCount;
  