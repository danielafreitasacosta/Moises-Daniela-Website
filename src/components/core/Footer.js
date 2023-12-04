import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
                <li>
                    <Link to='/visitas'>Visitas</Link>
                </li>
            </ul>
            Derechos reservados
        </div>
    )
}