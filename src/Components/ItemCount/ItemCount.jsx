import "../ItemCount/itemCount.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({initial, stock, onAdd}) =>{
    const[clicks, setClicks] = useState(initial);

    const decreaseClick = () =>{
        clicks > initial ? setClicks(clicks-1) : alert("mínimo disponible");
    }

    const increaseClick = () =>{
        clicks < stock ? setClicks(clicks+1) : alert("no hay más stock");
    }


    return (
        <div className="container__itemCount">
            <div className="itemCount">
                <button onClick={decreaseClick}> - </button>
                <div className="clicks">{clicks}</div>
                <button onClick={increaseClick}> + </button>
            </div>
            <Link to={"/cart"}><button onClick={()=>onAdd(clicks)}> AGREGAR AL CARRITO </button></Link>
        </div>
        
    )
}

export default ItemCount;