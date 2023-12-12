import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <ul>
                <li>
                    <Link color="primary" to='/'>Inicio</Link>
                </li>
                <li>
                    <Link color="primary" to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link color="primary" to='/history'>History</Link>
                </li>
                <li>
                    <Link color="primary" to='/visitas'>Visitas</Link>
                </li>
            </ul>
            Derechos reservados
        </div>
    )
}