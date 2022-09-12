import "../Home/home.css";
import Carousel from "../Home/Carousel";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from "react";
import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where} from 'firebase/firestore';

const Home = () => {
const [items, setItems] = useState([]);
const favourite = true;
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

    const getItemsFavourite = (favourite) => {
        return new Promise((resolve) => {
            const favourites = collection(firestoreDB, "joyas");
            const queryProducts = query(favourites, where("favourite", "==", true))

            getDocs(queryProducts).then( snapshot => {
                const docsData = snapshot.docs.map(doc =>{
                    return {...doc.data(), id: doc.id}
                });
                resolve(docsData);
                });
            })
    }  


    if(favourite){
        getItemsFavourite(favourite).then((resolve) => {
        setItems(resolve);
    });
    }else{
        getItemsFromDB().then((resolve) =>{
        setItems(resolve)
    });
}
},
[favourite]
)
    return (
        <div className="home">
            <div className="carusel">
                <Carousel/>
            </div>
            <div className="container__home">
            <h1>Los mas elegidos por ustedes <FavoriteIcon/></h1>
            <ItemList items = {items} />
            </div>
        </div>
    )
    
}

export default Home