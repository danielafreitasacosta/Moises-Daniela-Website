import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { green } from "@mui/material/colors";
import { createTheme } from '@mui/material';


/*
Credenciales de la cuenta de Gmail donde llegan los correos: 
Correo: cellertecnocampus@gmail.com
ContraseÃ±a: CELLerTECNOcampus2023!
*/

function SendEmail() {

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
}

function ContactForm() {
    const formStyle = {
        marginTop: "8px",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    };

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            fieldName: '',
            fieldName2: '',
            fieldName3: '',
        }
    });

    function onSubmit(value) {

        console.log(value);
        //Enviamos el formulario a nuestro servidor 

        reset();
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: green[500],
            },
        },
    });



    return (
        <>

            <form style={formStyle} onSubmit={handleSubmit(SendEmail)}>

                <Stack spacing={2}>

                    <Controller
                        name="fieldName"
                        control={control}
                        rules={{ required: 'Este campo es obligatorio' }}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Nombre"
                                variant="outlined"
                                size='small'
                                error={!!errors.fieldName}
                                helperText={errors?.fieldName?.message.toString()}
                            />
                        }


                    />

                    <Controller
                        name="fieldName2"
                        control={control}
                        rules={{ required: 'Este campo es obligatorio' }}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Email"
                                variant="outlined"
                                size='small'
                                error={!!errors.fieldName2}
                                helperText={errors?.fieldName2?.message.toString()}
                            />
                        }


                    />

                    <Controller
                        name="fieldName3"
                        control={control}
                        rules={{ required: 'Debes rellenar este campo' }}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Mensaje"
                                multiline
                                rows={4}
                                error={!!errors.fieldName3}
                                helperText={errors?.fieldName3?.message.toString()
                                }
                            />
                        }
                    />


                    <Button variant="contained" type="submit" color="primary" onClick={SendEmail}>
                        Enviar
                    </Button>

                </Stack>

            </form>



        </>
    )
}

export default ContactForm; 