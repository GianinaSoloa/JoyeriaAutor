import ItemList from '../ItemList/ItemList';
import data from '../Data/data';
import '../ItemListContainer/itemListContainer.css'
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const ItemListContainer = () =>{
const [items, setItems] = useState([]);
const {category} = useParams();
useEffect(() => {
        const promise = new Promise( (resolve,reject) => {

        setTimeout(
                () => {
                    resolve(data)
                }, 
                2000);
        });
        
        promise.then(
            (respuesta) => {
                const products = respuesta
                if(category){
                    setItems(products.filter(product => product.category === category));
                }else{
                    setItems(products)
                }
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    },
    [category]
)

    return(
        <div className='container__items'>
            <h1>Mejor decilo con una joya...</h1>
            <ItemList items = {items} />
        </div>
    )
}

export default ItemListContainer;