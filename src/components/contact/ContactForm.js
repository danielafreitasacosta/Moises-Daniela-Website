import {Button, TextField } from '@mui/material'; 
import {Controller, useForm} from 'react-hook-form'; 
import 'src/services/theme'; 


function ContactForm() {
    const { handleSubmit, control, formState: {errors}, reset} = useForm()

    function onSubmit (value) {
        //Enviar el email al servidor 
        console.log(value); 
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
            <Controller 
                name="fieldName"
                defaultValue=''
                control={control}
                rules={{ required : 'Este campo es obligatorio'}}
                render= {({ field }) => 
                    <TextField 
                        {...field}
                        label="Nombre y Apellido"
                        value={field.value}
                        variant="outlined" 
                        size='small' 
                        error={!!errors.fieldName}
                        helperText={errors?.fieldName?.message.toString()}
                    
                    />     
            }

        />
            <Button variant='contained' type='submit' >Send</Button>
        </form>

    )

}

export default ContactForm; 