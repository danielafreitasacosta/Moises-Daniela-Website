import { Link } from "react-router-dom";
import './InfoTop.css';
import { withTranslation } from "react-i18next"
import { Grid, Typography } from "@mui/material";

function InfoTop({ t, i18n }) {

    return (
        <div>
            <Grid container className="info-container">
                <Grid item md={6}>
                    <div className="left">
                        <Typography>
                            {t('global.infotopizquierda')}
                        </Typography>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="right">
                    <Typography>
                            {t('global.infotopderecha')}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default withTranslation('home')(InfoTop);