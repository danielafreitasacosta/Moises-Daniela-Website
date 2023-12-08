import "./Contact.css";
import { useRef } from 'react';
import 'src/pages/contact/Contact';
import emailjs from '@emailjs/browser';
import { Stack } from "@mui/system";
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
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47723.69108122675!2d0.5787352015325178!3d41.61833494518661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e048e73bd37f%3A0xa0d32ea2d259aaaf!2zTMOpcmlkYQ!5e0!3m2!1ses!2ses!4v1701892300427!5m2!1ses!2ses"
            width='100%'
            height='450' 
            style={{ border: 0 }}
            loading="lazy"
          
        />
        <Stack>
            <ContactForm />
        </Stack>
        </>
    );
};

export default Contact;
