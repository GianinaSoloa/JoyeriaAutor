import React, {createContext, useState, useEffect} from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext()

const CartProvider = ({ children }) =>{
    const [cartItems, setCartItems] = useState([]);
    let cartCopy = [...cartItems];
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

    const decreaseQuantity = (index) =>{
        cartCopy[index].quantity === 1 ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mínimo disponible',
        }) :
        cartCopy[index].quantity -= 1;  
        setCartItems(cartCopy);  
    }

    const increaseQuantity = (index) =>{
        cartCopy[index].quantity >= cartCopy[index].stock ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Stock no disponible',
        }) :
        cartCopy[index].quantity += 1;  
        setCartItems(cartCopy);  
    }

    return(
        <CartContext.Provider value={{cartItems, qtyProducts, addToCart, removeItem, isInCart, clear, totalPrice, subtotalPrice, totalItems, decreaseQuantity, increaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;