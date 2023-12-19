import { Link } from "react-router-dom";
import { RoutesPath } from "src/services/router";

export default function Footer() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to={RoutesPath.CONTACTO}>Contact</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
                <li>
                    <Link to={RoutesPath.WINE}>Vinos</Link>
                </li>
                <li>
                    <Link to='/visitas'>Visitas</Link>
                </li>
            </ul>
            Derechos reservados
        </div>
    )
}