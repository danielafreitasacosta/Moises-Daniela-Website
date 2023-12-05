import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';




function ContactForm() {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            fieldName: 'Esteve'
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
                            label="Message"
                            multiline
                            rows={4}
                            error={!!errors.fieldName}
                            helperText={errors?.fieldName?.message.toString()
                            }
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
                            label="Message"
                            multiline
                            rows={4}
                            error={!!errors.fieldName}
                            helperText={errors?.fieldName?.message.toString()}
                        />
                    }


                />

                <Button variant="contained" type="submit" color="primary">
                    Enviar
                </Button>


            </form>


        </>
    )
}

export default ContactForm; 