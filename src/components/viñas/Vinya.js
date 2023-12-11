import NavigationBar from "src/components/core/NavigationBar";
import './Vinya.css';
import Grid from "@mui/material/Grid";
import theme from "src/services/theme";
import { Paper } from "@mui/material";
import { withTranslation } from "react-i18next"

function wines({ t, i18n }) {
    return (
        <>
            <Paper elevation={0}>
                <div className="vinya-page">
                    <h1 className="parrafo-center">{t('viñas.titulo')}</h1>
                </div>

                <Grid container marginTop={"30px"}>
                    <Grid item md={6} sx={{ pl: '2rem', pr: '2rem' }}>
                        <div>
                            <h1>{t('viñas.contenedor1')}</h1>
                            <p>{t('viñas.contenedor11')}</p>
                        </div>
                    </Grid>
                    <Grid item md={6} sx={{ pl: '2rem', pr: '2rem' }}>
                        <div>
                            <p>
                                {t('viñas.contenedor2')}
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
export default withTranslation('home')(wines);