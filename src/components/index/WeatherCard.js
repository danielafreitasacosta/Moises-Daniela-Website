import { Typography } from "@mui/material";
import { withTranslation } from "react-i18next"

function WeatherCard ({ t, i18n }) {
    return (
        
        <div>
            <Typography>
                {t('temperatura')}
            </Typography>
            <h1>
                Curs SOC 
            </h1>
            
        </div>
    )
}

export default withTranslation('home')(WeatherCard);