import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/info'>Info</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
            </ul>
            Derechos reservados
        </div>
    )
}