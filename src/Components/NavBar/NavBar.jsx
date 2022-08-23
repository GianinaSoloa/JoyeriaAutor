import "../NavBar/navbar.css";
import logo from "../../Assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
        <div className="menu__container">
        <NavLink to="/"><img className="logo" src={logo} alt="Logo Cómo Decírtelo Joyas"/></NavLink>
            <nav id="menu">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) =>
                    isActive ? "active" : undefined }>HOME</NavLink></li>
                    <li><NavLink to="/us" className={({ isActive }) =>
                    isActive ? "active" : undefined }>NOSOTROS</NavLink></li>
                    <li className="menu__display"><NavLink to="/shop" className={({ isActive }) =>
                    isActive ? "active" : undefined }>SHOP</NavLink>
                        <ul>
                            <li><NavLink to="/category/anillos" className={({ isActive }) =>
                            isActive ? "active" : undefined }>ANILLOS</NavLink></li>
                            <li><NavLink to="/category/collares" className={({ isActive }) =>
                            isActive ? "active" : undefined }>COLLARES</NavLink></li>
                            <li><NavLink to="/category/pulseras" className={({ isActive }) =>
                            isActive ? "active" : undefined }>PULSERAS</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/contact" className={({ isActive }) =>
                    isActive ? "active" : undefined }>CONTACTO</NavLink></li>
                    <li><NavLink to="/cart" className={({ isActive }) =>
                    isActive ? "active" : undefined }> <CartWidget/> </NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default NavBar