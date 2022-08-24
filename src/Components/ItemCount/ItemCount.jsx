import "../ItemCount/itemCount.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({initial, stock, onAdd}) =>{
    const[quantity, setQuantity] = useState(initial);

    const decreaseQuantity = () =>{
        quantity > initial ? setQuantity(quantity-1) : alert("mínimo disponible");
    }

    const increaseQuantity = () =>{
        quantity < stock ? setQuantity(quantity+1) : alert("no hay más stock");
    }


    return (
        <div className="container__itemCount">
            <div className="itemCount">
                <button onClick={decreaseQuantity}> - </button>
                <div className="clicks">{quantity}</div>
                <button onClick={increaseQuantity}> + </button>
            </div>
            <button className="buttonStyle" onClick={()=>onAdd(quantity)}> AGREGAR AL CARRITO </button>
            <Link to={"/cart"}><button className="buttonStyle"> VER CARRITO </button></Link>
        </div>
        
    )
}

export default ItemCount;