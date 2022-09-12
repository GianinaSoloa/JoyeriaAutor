import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../Assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../NavBar/nav.css";

function BasicExample() {

    if(NavLink.active){
        let element = document.getElementsByClassName("navbar-toggler");
        element.classList.toggle("collapsed");
    }
    return (
        <Navbar expand="lg">
            <Container>
                <NavLink to="/"><img className="logo" src={logo} alt="Logo Cómo Decírtelo Joyas"/></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/us">NOSOTROS</NavLink>
                        <NavDropdown title="SHOP" id="basic-nav-dropdown">
                            <NavLink to="/shop" className="dropdown-item">TODOS</NavLink>
                            <NavLink to="/category/anillos" className="dropdown-item">ANILLOS</NavLink>
                            <NavLink to="/category/collares" className="dropdown-item">COLLARES</NavLink>
                            <NavLink to="/category/pulseras" className="dropdown-item">PULSERAS</NavLink>
                        </NavDropdown>
                        <NavLink to="/contact">CONTACTO</NavLink>
                        <NavLink to="/cart"><CartWidget/></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;