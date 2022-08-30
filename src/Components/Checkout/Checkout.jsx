import "../CartView/cartView.css";
import "../Checkout/checkout.css";
import React, { useState, useContext } from "react";
import { CartContext } from '../../Store/CartContext';
import firestoreDB from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Link } from "react-router-dom";
import DoneAllIcon from '@mui/icons-material/DoneAll';


const Checkout = () => {
    const { cartItems, clear, totalPrice} = useContext(CartContext)

    const [userBuyer, setUserBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    });

    const purchaseOrder = {
        buyer: { ...userBuyer },
        items: [...cartItems],
        total: totalPrice(),
        date: new Date(),
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        const collectionRef = collection(firestoreDB, "orders");
        const order = await addDoc(collectionRef, purchaseOrder);
        setOrderFirebase({ id: order.id, complete: true });
        clear()
    }

    function inputChangeHandler(evt) {
        const input = evt.target;
        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userBuyer };

        copyUserData[inputName] = value;
        setUserBuyer(copyUserData);
    }

    if (orderFirebase.complete === true) {
        return(
            <main className='thanks__container'>
                <div className="thanks__icon"><div><DoneAllIcon/></div></div>
                <h1>¡Su compra ha sido exitosa!</h1>
                <h2>El id de seguimiento de su compra es: <span className="colored">{orderFirebase.id}</span></h2>
                <p>Cuando su pedido esté listo y sea despachado recibirá una notificación en su Email. Si no recibe nada en los próximos días puede comunicarse con nosotros a través del formulario de contacto o vía WhatsApp. Recuerde revisar la bandeja de Spam. </p>
                <Link to ={"/"}> <button className='thanks__button'>IR A LA HOME</button></Link>
            </main>
        )
        }
        else{
        return (
        <div className="checkout">
            <p>¡Completá los siguientes datos para finalizar tu compra!</p>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-item">
                        <input
                            value={userBuyer.name}
                            onChange={inputChangeHandler}
                            name="name"
                            type="text"
                            placeholder="NOMBRE COMPLETO"
                            required
                        />
                    </div>

                    <div className="form-item">
                        <input
                            value={userBuyer.phone}
                            onChange={inputChangeHandler}
                            name="phone"
                            type="text"
                            placeholder="TELÉFONO"
                            required
                        />
                    </div>

                    <div className="form-item">
                        <input
                            value={userBuyer.email}
                            onChange={inputChangeHandler}
                            name="email"
                            type="text"
                            placeholder="EMAIL"
                            required
                        />
                    </div>

                    <div className="forms__buttons">
                        <button className="button__form" type="submit">LO QUIERO!</button>
                    </div>
                </form>
            </div>    
        </div>
    );
}
}
export default Checkout;
