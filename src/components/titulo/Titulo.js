import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next"
import { Grid, Typography } from "@mui/material";
import './Titulo.css';


function Titulo({ t, i18n }) {

    return (
        <Grid container sx={{ alignContent: "center", textAlign: "center", paddingTop: "200px", display: "flex" }}>
            <Grid item md={12}>
                <h1>{t('present.titulo')}</h1>
            </Grid>
            <Grid item md={12}>
                <p>{t('present.subtitulo')}</p>
            </Grid>
        </Grid>
    )
}
export default withTranslation('home')(Titulo)
