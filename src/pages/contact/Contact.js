import "./Contact.css";
import React, { useRef } from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/contact/Contact'
import emailjs from '@emailjs/browser';

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

                    <form ref={form} onSubmit={sendEmail} className="column" >
                        <input type="text" placeholder="Full Name" name="user_name" required></input>
                        <input type="email" placeholder="Email" name="user_email" required></input>
                        <input type="text" placeholder="Subject" name="subject" required></input>
                        <textarea name="message" cols={30} rows={10}></textarea>
                        <button type="submit"> Send Message </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;