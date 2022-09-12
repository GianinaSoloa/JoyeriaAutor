import React, {useContext} from "react";
import { CartContext } from '../../Store/CartContext';
import { Link } from "react-router-dom";
import CartView from "../CartView/CartView";
import "../CartView/cartView.css";

const Cart = () => {
    const { cartItems, clear, totalPrice } = useContext(CartContext);
    if (cartItems.length === 0) {
        return(
        <div className="emptycart">
            <p>Ups! Tu carrito está vacío</p>
            <Link to={"/shop"}><button className="buy">IR A COMPRAR</button></Link>
        </div>
        )   
    }else{
        return (
            <>
                <p className="cart__title">Tu pedido por el momento:</p>
                <div className="cart">
                    <table>
                        <thead>
                            <tr className="itemslist__title">
                                <th className="itemlist__remove">&nbsp;</th>
                                <th className="itemlist__img">PRODUCTO</th>
                                <th className="itemlist__title">DESCRIPCIÓN</th>
                                <th className="itemlist__price">PRECIO</th>
                                <th className="itemlist__quantity">CANTIDAD</th>
                                <th className="itemlist__subtotal">SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map ((item, index)  =>(
                            <CartView 
                            key={item.id}
                            id={item.id}
                            title={item.title} 
                            price={item.price}
                            pictureUrl={item.pictureUrl} 
                            quantity={item.quantity} 
                            />
                        ))}
                        </tbody>
                    </table>
                    <div className="cart__totals">
                        <h2>TOTAL COMPRA</h2>
                        <table className="totalCart">
                            <tbody>
                                <tr className="subtotal__cart">
                                    <th>Subtotal</th>
                                    <td><p>${totalPrice()}</p></td>
                                </tr>
                                <tr className="shipping">
                                    <th>Envío</th>
                                    <td>Envío gratuito</td>
                                </tr>
                                <tr className="total__cart">
                                    <th>Total</th>
                                    <td><strong><p>${totalPrice()}</p></strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="finalstep">
                            <button className="button" onClick={clear}> VACIAR CARRITO </button>
                            <Link to={"/checkout"}><button className="button buy">FINALIZAR COMPRA</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    
}

export default Cart