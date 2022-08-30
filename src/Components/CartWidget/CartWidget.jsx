import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from "react";
import { CartContext } from '../../Store/CartContext';
import "../CartWidget/cartwidget.css";

const CartWidget = () => {
    const {qtyProducts} = useContext(CartContext)
    return (
        <>
        <ShoppingCartIcon className="iconCart"/>
        <p className='quantity__cartwidget'>{qtyProducts}</p>
        </>
    )
}

export default CartWidget