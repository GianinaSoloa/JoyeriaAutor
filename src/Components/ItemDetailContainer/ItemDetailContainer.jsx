import ItemDetail from '../ItemDetail/ItemDetail';
import data from '../Data/data';
import '../ItemDetailContainer/itemDetailContainer.css';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemDetailContainer = () =>{
const [item, setItem] = useState({});
const {id} = useParams();

useEffect(
    () => {
        const promise = new Promise( (resolve,reject) => {
            let itemRequested = data.find (element => element.id == id)
            resolve(itemRequested);
        });

         /*  const getItemsFromDB = () => {
            return new Promise((resolve) => {
              const todosCollection = collection(firestoreDB, "todos");
          
              getDocs(todosCollection).then( snapshot => {
                const docsData = snapshot.docs.map( doc => doc.data());
                resolve(docsData);
                });
              })      
          }; */
        promise.then(
            (respuesta) => {
                setItem(respuesta);
            }
        ).catch(
            (error) => {
                console.error(error);
            }
        )
    },
    []
)

    return(
        <div className='container__item'>
            <h1>Detalle</h1>
            <ItemDetail
                key = {item?.id}
                id = {item?.id}
                stock = {item?.stock}
                title = {item?.title}
                description = {item?.description}
                price = {item?.price}
                pictureUrl = {item?.pictureUrl}
            />
        </div>
    )
}

export default ItemDetailContainer;