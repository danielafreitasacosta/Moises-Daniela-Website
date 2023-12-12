import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="background">
            <div>
                <img className="imagen" src="images/triste.png"></img>
            </div>
            <h2>
                No encontramos la página que buscas.
            </h2>
            <h1>
                Puedes ir a la HOME mediante el enlace de abajo.
            </h1>
            <div>
                <button className="boton" onClick={() => window.location.href = '/'}>Ir a Home</button>
            </div>

        </div>
    )
}