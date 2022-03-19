import React from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import useFetch from "../hooks/useFetch";

//contenedor del main
const ItemListContainer = () => {

    const url = 'https://demo9118046.mockable.io/productosCabello'
    const data = useFetch(url)
   
    return (
        <div className="itemList-Container">
            <h1>{data.catName ? data.catName : null}</h1>
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;