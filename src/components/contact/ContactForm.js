import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/*
Credenciales de la cuenta de Gmail donde llegan los correos: 
Correo: cellertecnocampus@gmail.com
Contraseña: CELLerTECNOcampus2023!
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
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            fieldName: ''
        }
    });

    function onSubmit(value) {
        console.log(value);
        //Enviamos el formulario a nuestro servidor 

        reset();
    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>

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
                    name="fieldName"
                    control={control}
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            size='small'
                            error={!!errors.fieldName}
                            helperText={errors?.fieldName?.message.toString()}
                        />
                    }


                />

                <Controller
                    name="fieldName"
                    control={control}
                    rules={{ required: 'Debes rellenar este campo' }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Mensaje"
                            multiline
                            rows={4}
                            error={!!errors.fieldName}
                            helperText={errors?.fieldName?.message.toString()
                            }
                        />
                    }
                />


                <Button variant="contained" type="submit" color="primary" onClick={SendEmail}>
                    Enviar
                </Button>


            </form>



        </>
    )
}

export default ContactForm; 