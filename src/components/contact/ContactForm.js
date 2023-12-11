import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


/*
Credenciales de la cuenta de Gmail donde llegan los correos: 
Correo: cellertecnocampus@gmail.com
ContraseÃ±a: CELLerTECNOcampus2023!
*/

const formStyle = {
    marginTop: "8px",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    
    
};



export function ContactForm () {
    
    const form = useRef();

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            fieldName: '', 
            fieldEmail: '', 
            fieldMessage: '', 
        }
    });

    const SendEmail = () => {
       
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
       
        // form.current.reset();

    }

     
    

    return (
        <>

            <form  style={formStyle} ref={form} onSubmit={handleSubmit(SendEmail)}>

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
                    name="fieldEmail"
                    control={control}
                    rules={{ required: 'Este campo es obligatorio' }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Email"
                            size='small'
                            error={!!errors.fieldEmail}
                            helperText={errors?.fieldEmail?.message.toString()}
                        />
                    }


                />

                <Controller
                    name="fieldMessage"
                    control={control}
                    rules={{ required: 'Debes rellenar este campo' }}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Mensaje"
                            multiline
                            rows={4}
                            error={!!errors.fieldMessage}
                            helperText={errors?.fieldMessage?.message.toString()
                            }
                        />
                    }
                />


                <Button variant="contained" type="submit" color="primary">
                    Enviar
                </Button>

                </Stack>

            </form>



        </>
    );
                };


export default ContactForm; 


   

  

  
   

   