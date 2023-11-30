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
            <Button variant='contained' type="submit" sx={{ marginLeft: '4px' }}>Enviar</Button>
            
        </form>
        </>
    )
}

export default ContactForm; 