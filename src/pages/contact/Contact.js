//import "./Contact.css";
import NavigationBar from "src/components/core/NavigationBar";
import ContactForm from "src/components/contact/ContactForm";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));


const Contact = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12} sm={6}>

                    <div className="image-grid-contact">
                        <div className="img-center">
                            <NavigationBar />
                        </div>
                    </div>
                    <section>
                        <Grid item xs={12} sm={6}>
                            <h2 >Contacto</h2>
                            <ContactForm />
                        </Grid>
                    </section>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;