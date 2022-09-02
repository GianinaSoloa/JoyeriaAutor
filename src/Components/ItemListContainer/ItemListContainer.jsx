import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemListContainer.css'
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where} from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';


const ItemListContainer = () =>{
const [items, setItems] = useState([]);
const {category} = useParams();
useEffect(() => {

    const getItemsFromDB = () => {
        return new Promise((resolve) => {
            const products = collection(firestoreDB, "joyas");

            getDocs(products).then( snapshot => {
                const docsData = snapshot.docs.map(doc =>{
                    return {...doc.data(), id: doc.id}
                });
                resolve(docsData);
                });
            })
    }  

    const getItemsFromDBbyCategory = (category) => {
        return new Promise((resolve) => {
            const products = collection(firestoreDB, "joyas");
            const queryProducts = query(products, where("category", "==", category))

            getDocs(queryProducts).then( snapshot => {
                const docsData = snapshot.docs.map(doc =>{
                    return {...doc.data(), id: doc.id}
                });
                resolve(docsData);
                });
            })
    }  


    if(category){
        getItemsFromDBbyCategory(category).then((resolve) => {
        setItems(resolve);
    });
    }else{
        getItemsFromDB().then((resolve) =>{
        setItems(resolve)
    });
}
},
[category]
)


    return(
        <>
            {items.length === 0 ?
            <div className='container__items'>
                <Spinner/>
            </div>
                :
            <div className='container__items'>
                <h1>Mejor decilo con una joya...</h1>
                <ItemList items = {items} />
            </div>
            }
        </>
    )
}

export default ItemListContainer;