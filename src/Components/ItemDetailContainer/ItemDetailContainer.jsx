import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/itemDetailContainer.css';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import firestoreDB from '../../services/firebase';
import { getDoc, collection, doc } from 'firebase/firestore';


const ItemDetailContainer = () =>{
const [item, setItem] = useState({});
const {id} = useParams();

useEffect(() => {
            const getItemsById = (id) => {
                return new Promise((resolve, reject) => {
                    const products = collection(firestoreDB, "joyas");
                    const docRef = doc(products, id);

                    getDoc(docRef).then( snapshot => {
                        resolve(
                            {...snapshot.data(), id: snapshot.id}
                        )
                    });
                })
            }    
        

            getItemsById(id).then(
                (response) => {
                    setItem(response);
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