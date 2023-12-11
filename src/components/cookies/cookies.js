import React, { useEffect } from 'react';
import './cookies.css';

export default function Cookies() {
    useEffect(() => {
        const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
        const botonNavegarSinCookies = document.getElementById('btn-navegar-sin-cookies');
        const avisoCookies = document.getElementById('aviso-cookies');
        const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

        if (!localStorage.getItem('cookies-aceptadas') && !localStorage.getItem('navegar-sin-cookies')) {
            avisoCookies.classList.add('activo');
            fondoAvisoCookies.classList.add('activo');
        }

        const handleClickAceptarCookies = () => {
            avisoCookies.classList.remove('activo');
            fondoAvisoCookies.classList.remove('activo');
            localStorage.setItem('cookies-aceptadas', JSON.stringify(true));
        };

        const handleClickNavegarSinCookies = () => {
            avisoCookies.classList.remove('activo');
            fondoAvisoCookies.classList.remove('activo');
            localStorage.setItem('navegar-sin-cookies', JSON.stringify(true));
        };

        if (botonAceptarCookies) {
            botonAceptarCookies.addEventListener('click', handleClickAceptarCookies);
        }

        if (botonNavegarSinCookies) {
            botonNavegarSinCookies.addEventListener('click', handleClickNavegarSinCookies);
        }

        // Limpiar los eventos al desmontar el componente
        return () => {
            if (botonAceptarCookies) {
                botonAceptarCookies.removeEventListener('click', handleClickAceptarCookies);
            }
            if (botonNavegarSinCookies) {
                botonNavegarSinCookies.removeEventListener('click', handleClickNavegarSinCookies);
            }
        };
    }, []);

    return (
        <>
            <div className="aviso-cookies" id="aviso-cookies">
            <img className="galleta" src="images/cookie.png" alt="Galleta"></img>
                <button className="boton" id="btn-aceptar-cookies">De acuerdo</button>
                <button className="boton" id="btn-navegar-sin-cookies">Navegar sin cookies</button>
                <a className="enlace" href="aviso-cookies.html">Aviso de Cookies</a>
            </div>
            <div className="fondo-aviso-cookies" id="fondo-aviso-cookies"></div>
        </>
    );
}