import { Typography } from "@mui/material";
import { withTranslation } from "react-i18next"

function WeatherCard({ children, fecha, t, i18n }) {
    return (

        <div>
            <Typography>
                {t('temperatura')}
            </Typography>
            <h1>
                Curs SOC
            </h1>
            {children}

            Fecha: {fecha.toLocaleDateString()}
        </div>
    )
}

export default withTranslation('home')(WeatherCard);