import { Link } from "react-router-dom";

export default function NotFound () {
    return (
        <div>
            <p>
                No encontramos la página que buscas.
            </p>
            <p>
                Puedes ir a la HOME mediante el enlace de abajo
            </p>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}