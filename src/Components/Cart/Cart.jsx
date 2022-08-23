import React, {useContext} from "react";
import { CartContext } from "../Store/CartContext";
import Item from "../Item/Item";

const Cart = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <>
            {cartItems.map ((item) =>(
                <Item 
                key={item.id}
                id={item.id}
                category={item.category}
                title={item.title} 
                price={item.price}
                pictureUrl={item.pictureUrl} 
                />
            ))}
        </>
    )
}

export default Cart