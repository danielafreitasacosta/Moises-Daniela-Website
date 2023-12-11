import './Vinya.css';
import Grid from "@mui/material/Grid";
import { withTranslation } from "react-i18next"

function wines({ t, i18n }) {
    return (
        <>
            <div className="vinya-page">
                <h1 className="parrafo-center">{t('viñas.titulo')}</h1>
            </div>
            <Grid container marginTop={"30px"}>
                <Grid item md={6}>
                    <h1 className="parrafo">{t('viñas.contenedor1')}</h1>
                    <p className="parrafo">{t('viñas.contenedor11')}</p>
                </Grid>
                <Grid item md={6}>
                    <p className="parrafo">
                        {t('viñas.contenedor2')}
                    </p>
                </Grid>
            </Grid>
        </>
    )
}
export default withTranslation('home')(wines);