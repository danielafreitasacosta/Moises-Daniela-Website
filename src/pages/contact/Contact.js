import "./Contact.css";
import React, { useRef } from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/contact/Contact'
import emailjs from '@emailjs/browser';
import ContactForm from "src/components/contact/ContactForm";


/*
Credenciales de la cuenta de Gmail donde llegan los correos: 
Correo: cellertecnocampus@gmail.com
Contraseña: CELLerTECNOcampus2023!
*/



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_pddibau',
            'template_1qz768n',
            form.current,
            'hsXoj_9R8eIZQIEa5'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <>

            <div className="image-grid-contact">
                <div className="img-center">
                    <NavigationBar />
                </div>
            </div>
            <section>
                <div className="column">
                    <h2 >Contacto</h2>

                    <ContactForm />


                </div>
            </section>

        </>
    );
};

export default Contact;