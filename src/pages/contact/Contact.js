import emailjs from '@emailjs/browser';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { Stack } from "@mui/system";
import { useRef } from 'react';
import ContactForm from "src/components/contact/ContactForm";
import Infoenlaces from "src/components/infoenlaces/Infoenlaces";
import 'src/pages/contact/Contact';
import theme from "src/services/theme";
import "./Contact.css";


/*
Credenciales de la cuenta de Gmail donde llegan los correos: 
Correo: cellertecnocampus@gmail.com
Contraseña: CELLerTECNOcampus2023!
*/



const Contact = () => {
	const h1Style = {
		fontSize: 24,
		fontWeight: 'medium',
		color: 'black',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,

	}

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
			<CssVarsProvider theme={theme}>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.835877874908!2d0.8810152!3d42.06813715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a65d313b0e9c13%3A0xcb859fda64d616f2!2s25631%20Cellers%2C%20L%C3%A9rida!5e0!3m2!1ses!2ses!4v1702154646208!5m2!1ses!2ses"
					width='100%'
					height='450'
					style={{ border: 0 }}
					loading="lazy"
				/>



				<Stack sx={{ color: 'text.secondary', fontSize: 14 }}>

					<h1 style={h1Style}>  Contacto </h1>

					<ContactForm />

				</Stack>





				<Infoenlaces />


			</CssVarsProvider>

		</>
	);
}

export default Contact;
