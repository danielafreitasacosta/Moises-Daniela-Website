import { Link } from "react-router-dom";
import './InfoTop.css';
import { withTranslation } from "react-i18next"
import { Grid, Typography } from "@mui/material";

function InfoTop({ t, i18n }) {

    return (
        <>
            <Grid container className="info-container" sx={{ justifyContent: "space-between", px: "15px" }}>
                <Grid item md={6} sx={{ textAlign: "left" }}>

                    <Typography>
                        {t('global.infotopizquierda')}
                    </Typography>

                </Grid>
                <Grid item md={6} sx={{ textAlign: "right" }}>

                    <Typography>
                        {t('global.infotopderecha')}
                    </Typography>
                </Grid>

            </Grid>
            <hr style={{ width: '100%', backgroundColor: 'white', height: '1px', border: 'none', marginTop: '10px' }} />
        </>
    )
}
export default withTranslation('home')(InfoTop);