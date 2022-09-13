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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems]

    )

    const addToCart = (item) => {
        let cartCopy = [...cartItems];
        if (isInCart(item.id)) {
            const found = cartItems.find (i => i.id === Number(item.id));
            const index = cartItems.indexOf(found);
            cartCopy[index].quantity += item.quantity;
            setCartItems(cartCopy)
        } else {
            cartCopy.push({...item});
            setCartItems(cartCopy)
        };
    }

    const removeItem = (id) =>{
        setCartItems (cartItems.filter((item) => item.id !== id));
    }

    const isInCart = (id) => {
        return (cartItems.some ((itemInCart) => itemInCart.id === Number(id)));
    }


    const clear = () => {
        setCartItems([]);
    }

    const subtotalPrice = (price, quantity) => {
        let subtotal = (price * quantity);
        return subtotal;
    }

    const totalPrice = () => {
        let total = 0;
        cartItems.forEach ( (i) => total += i.price * i.quantity );
        return total;
    
    }
    

    const totalItems = () => {
        let totalQty = 0;
        cartItems.map(i => totalQty += i.quantity);
        return totalQty;
    }

    const decreaseQuantity = (quantity) =>{
        quantity > 1 ?  setQtyProducts(quantity-1) : alert("mínimo disponible");
    }

    const increaseQuantity = (quantity, stock) =>{
        quantity < stock ?  setQtyProducts(quantity+1) : alert("no hay más stock");
    }

    return(
        <CartContext.Provider value={{cartItems, qtyProducts, addToCart, removeItem, isInCart, clear, totalPrice, subtotalPrice, totalItems, decreaseQuantity, increaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;