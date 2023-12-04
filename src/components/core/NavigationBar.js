import { NavLink } from "react-router-dom";
import './NavigationBar.css';


export default function NavigationBar() {
    return (
        <div className="NavBar">
            <NavLink to="/visitas">Inicio</NavLink>
            <NavLink to="/history">Historia</NavLink>
            <NavLink to="/wine">Vinos</NavLink>
            <NavLink to="/contact">Contacto</NavLink>

        </div>
    )
}