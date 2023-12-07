import { NavLink } from "react-router-dom";
import './NavigationBar.css';
import logoImage from './logo-light-new.png';

export default function NavigationBar() {

    const iconStyle = {
        marginRight: "5px",
        width: "25%", 
        height: "25%",
        
    };

    return (
        <div className="NavBar">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/history">Historia</NavLink>
            <img src={logoImage} alt="Logo" style={iconStyle} />
            <NavLink to="/wine">Vinos</NavLink>
            <NavLink to="/contact">Contacto</NavLink>

        </div>
    )
}