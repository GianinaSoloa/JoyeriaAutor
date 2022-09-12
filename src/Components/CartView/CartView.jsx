import "../CartView/cartView.css";
import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { CartContext } from '../../Store/CartContext';

const CartView = ({id, title, price, pictureUrl, quantity}) => {
    const {removeItem, subtotalPrice, decreaseQuantity, increaseQuantity} = useContext(CartContext);
    return (
            <tr>
                <td className="item__remove">
                    <img src="/img/remove.png" className="cartDelete" onClick={() => removeItem(id)} alt="Quitar elemento"/>
                </td>
                <td className="item__img">
                    <Link to={`/detalle/${id}`}><img className="cart__image" src={pictureUrl} alt="Cómo Decírtelo Joyas" /></Link>
                </td>
                <td className="item__title">
                    <p>{title}</p>
                </td>
                <td className="item__price">
                    <p>${price}</p>
                </td>
                <td className="item__quantity">
                    <div className="counter">
                        <button onClick={decreaseQuantity}> - </button>
                        <div className="clicks">{quantity}</div>
                        <button onClick={increaseQuantity}> + </button>
                    </div>
                </td>
                <td className="item__quantity">
                    <p>${subtotalPrice(price,quantity)}</p>
                </td>
            </tr>  
        );
}

export default CartView;
