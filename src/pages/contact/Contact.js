import "./Contact.css";
import React, { useRef } from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/contact/Contact'
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'src/styles/globalStyles.css'; 
import defaultTheme from "src/styles/themes/defaultTheme";

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