<<<<<<< Updated upstream
import "./Contact.css";
import React, { useRef } from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/contact/Contact'
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'src/styles/globalStyles.css'; 
import defaultTheme from "src/styles/themes/defaultTheme";

=======
>>>>>>> Stashed changes
/*
Credenciales de la cuenta de Gmail donde llegan los correos: 
Correo: cellertecnocampus@gmail.com
Contraseña: CELLerTECNOcampus2023!
*/ 

import { Container } from '@mui/material'; 
import ContactForm from 'src/components/contact/ContactForm';
import { ThemeProvider} from '@mui/material/styles'
import { green } from '@mui/material/colors';
import 'src/services/theme'; 


<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

function Contact () {

    return (
<<<<<<< Updated upstream
        <>
        <div style={{ color: defaultTheme.colors.primary}}> 
            <div className="image-grid-contact">
                <div className="img-center">
                    <NavigationBar />
                </div>
            </div>
            <section>
                <div className="column">
                    <h2 >Contacto</h2>

                    <form ref={form} onSubmit={sendEmail} className="column" >
                    <TextField id="outlined-basic" variant="outlined" type="text" placeholder="Full Name" name="user_name" required/>
                       
                        <input type="email" placeholder="Email" name="user_email" required></input>
                        <input type="text" placeholder="Subject" name="subject" required></input>
                        <textarea name="message" cols={30} rows={10}></textarea>
                        <Button variant="contained" type="submit"> Send Message </Button>
                    </form>
                </div>
            </section>
            </div>
        </>
    );
};

export default Contact;
=======
    <>
      
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47723.69108122675!2d0.5787352015325178!3d41.61833494518661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e048e73bd37f%3A0xa0d32ea2d259aaaf!2zTMOpcmlkYQ!5e0!3m2!1ses!2ses!4v1701892300427!5m2!1ses!2ses"
            width='100%'
            height='450' 
            style={{ border: 0 }}
            loading="lazy"
          
        />
      <ThemeProvider theme={green}>
        <Container>
            <ContactForm />
        </Container>
        </ThemeProvider>
    </>
    )
}

export default Contact; 
>>>>>>> Stashed changes
