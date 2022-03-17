
import * as React from 'react';
import fotoCat from '../fotoCat.jpg';
import '../App.css';
import Nosotros from './paginas/Nosotros';
import CartWidget from './CartWidget';
import { Card, Button } from 'react-bootstrap';
import ItemList from './ItemList';
import Item from './Item';
import { useState, useEffect } from 'react';
import { pedirDatos } from "../helpers/pedirDatos"



export const ItemListContainer = () => {
 const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProductos( res )
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [])

    return (
       
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
} 