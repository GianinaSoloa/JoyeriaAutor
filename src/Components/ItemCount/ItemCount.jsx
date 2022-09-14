import "../ItemCount/itemCount.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const ItemCount = ({initial, stock, onAdd}) =>{
    const[quantity, setQuantity] = useState(initial);

    const decreaseQuantity = () =>{
        quantity > initial ? setQuantity(quantity-1) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mínimo disponible',
        });
    }

    const increaseQuantity = () =>{
        quantity < stock ? setQuantity(quantity+1) : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo sentimos, no hay más stock',
        });
    }


    return (
        <div className="container__itemCount">
            <div className="itemCount">
                <div className="counter">
                    <button onClick={decreaseQuantity}> - </button>
                    <div className="clicks">{quantity}</div>
                    <button onClick={increaseQuantity}> + </button>
                </div>
                <button className="addtocart__button" onClick={()=>onAdd(quantity)}> AGREGAR AL CARRITO </button>
            </div>
            <Link to={"/cart"}><button className="viewcart__button"> VER CARRITO </button></Link>
        </div>
        
    )
}

export default ItemCount;