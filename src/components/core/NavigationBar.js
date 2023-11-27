import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div>
            <NavLink to="/">Página de Inicio</NavLink>
            <NavLink to="/info">Página de Info</NavLink>
            <NavLink to="/history">Página de Historia</NavLink>
        </div>
    )
}