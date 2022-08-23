import "../Item/item.css";
import { Link } from "react-router-dom";

const Item = ({id, title, description, price, pictureUrl, stock}) => {
    return (
            <div className="cart">
                <Link to={`/detalle/${id}`}>
                    <img className="cart__image" src={pictureUrl} alt="Anillo Cómo Decírtelo Joyas" />
                </Link>
                <h3>{title}</h3>
                <h4>${price}</h4>
                <Link to={`/detalle/${id}`}>
                    <button>Ver Más</button>
                </Link>
            </div>      
    );
}

export default Item;
