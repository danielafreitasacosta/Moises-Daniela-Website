import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div>
            <NavLink to="/">Página de Inicio</NavLink>
            <NavLink to="/contact">Página de Contacto</NavLink>
            <NavLink to="/pricing">Página de Precios</NavLink>
            <NavLink to="/history">Página de Historia</NavLink>
        </div>
    )
}