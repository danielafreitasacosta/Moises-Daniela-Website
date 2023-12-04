import { NavLink } from "react-router-dom";
import './NavigationBar.css';


export default function NavigationBar() {
    return (
        <div className="NavBar">
            <NavLink to="/visitas">Visitas</NavLink>
            <NavLink to="/history">Historia</NavLink>

            <NavLink to="/vinos">Vinos</NavLink>

            <NavLink to="/contact">Contacto</NavLink>

        </div>
    )
}