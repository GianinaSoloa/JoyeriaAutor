import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from "react";
import { CartContext } from '../Store/CartContext';
import "../CartWidget/cartwidget.css";

const CartWidget = () => {
    const {qtyProducts} = useContext(CartContext)
    return (
        <>
        <p>{qtyProducts}</p>
        <ShoppingCartIcon className="iconCart"/>
        </>
    )
}

export default CartWidget