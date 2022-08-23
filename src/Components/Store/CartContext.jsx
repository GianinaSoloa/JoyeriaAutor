import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) =>{
    const [cartItems, setCartItems] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () =>{
        let quantity = 0;
        cartItems.forEach (item => quantity += item.quantity)
        setQtyProducts(quantity)
    }

    useEffect(() => {
        getQtyProducts();
    }, [cartItems]

    )

    const addToCart = (item, quantity) => {
        let cartCopy = [...cartItems];
        if (isInCart(item.id)) {
            const found = cartItems.find (i => i.id === item.id);
            const index = cartItems.indexOf(found);
            cartCopy[index].quantity += item.quantity;
            setCartItems(cartCopy)
        } else {
            cartCopy.push({...item, quantity});
            setCartItems(cartCopy)
        };
    }

    const removeItem = (id) =>{
        setCartItems (cartItems.filter(remove => remove.id !== id));
    }

    const isInCart = (id) => {
        return (cartItems.some (itemInCart => itemInCart.id === id));
    }
    
    const clear = () => {
        setCartItems([]);
    }

    return(
        <CartContext.Provider value={{cartItems, qtyProducts, addToCart, removeItem, isInCart, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;