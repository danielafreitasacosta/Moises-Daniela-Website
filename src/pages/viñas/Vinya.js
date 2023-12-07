import NavigationBar from "src/components/core/NavigationBar";
import './Vinya.css';
import Grid from "@mui/material/Grid";
import { withTranslation } from "react-i18next" 

function wines({ t, i18n}) {
    return (
        <div>
            <Grid container marginTop={"30px"}>
                <Grid item md={12}>
                    <div className="vinya-page">
                        <h1 className="parrafo-center">{t('viñas.titulo')}</h1>
                    </div>
                </Grid>
            </Grid>
            <Grid container marginTop={"30px"}>
                <Grid item md={6}>
                    <div className="parrafo">
                        <h1>{t('viñas.contenedor1')}</h1>
                        <p>{t('viñas.contenedor11')}</p>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div>
                        <p className="parrafo">
                        {t('viñas.contenedor2')}   
                        </p>
                    </div>
                </Grid>
            </Grid>            
        </div>
    )
}
export default withTranslation('home')(wines);