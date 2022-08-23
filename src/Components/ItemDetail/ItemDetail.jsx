import '../ItemDetail/itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { CartContext } from '../Store/CartContext';


const ItemDetail = ({id, title, description, price, pictureUrl, stock}) => {
    const [quantityInCart, setquantityInCart] = useState(0);
    const {addToCart} = useContext(CartContext);

    const handleAdd = (quantity) =>{
        const itemToCart = {id, title, description, price, pictureUrl, stock}
        addToCart(itemToCart, quantity)
        setquantityInCart(quantity);
            Swal.fire(
                `${quantity} items añadidos al carrito`
            )
    }

    return (
            <div className="detail">
                <div className='detail__image'>
                    <img className="cart__image" src={pictureUrl} alt="Anillo Cómo Decírtelo Joyas" />
                </div>    
                <div className='detail__text'>
                    <h3>{title}</h3>
                    <h4 className='detail__description'>{description}</h4>
                    <h4>${price}</h4>
                    {quantityInCart === 0 ? (
                    <ItemCount initial={1} stock={stock} onAdd={handleAdd} />)
                    : (<Link to={"/cart"}><button> IR AL CARRITO </button></Link>)
                    }
                </div>    
            </div>      
    );
}

export default ItemDetail;
