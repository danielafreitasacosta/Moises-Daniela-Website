import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { t } from 'i18next';
import './Weather.css';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);

    const containerStyle = {
        marginTop: "30px",
    };

    const boxStyle = {
        padding: "16px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px"

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08040');
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <Paper elevation={0} sx={boxStyle}>
            <Card>
                <CardContent>
                    {weatherData ? (
                        <div>
                            <h1 color='main.primary' >{t('clima.titulo')}</h1>

                            <Grid container spacing={2} sx={containerStyle}>
                                <Grid item md={3}>
                                    <Paper elevation={0} sx={boxStyle}>
                                        <div>{t('clima.dia')} {format(new Date(weatherData.pronostico.hoy['@attributes'].fecha), 'dd')}</div>
                                        <div className='max-temperature'>Max: {weatherData.temperaturas.max}ºC</div>
                                        <div className='min-temperature'>Min: {weatherData.temperaturas.min}ºC</div>
                                    </Paper>
                                </Grid>
                                {weatherData.proximos_dias.map((item) => (
                                    <Grid item md={3} key={item}>
                                        <Paper elevation={0} sx={boxStyle}>
                                            <div>
                                                {t('clima.dia')} {format(new Date(item['@attributes'].fecha), 'dd')}
                                            </div>
                                            <div className='max-temperature'>Max: {item.temperatura.maxima}ºC</div>
                                            <div className='min-temperature'>Min: {item.temperatura.minima}ºC</div>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                        </div>

                    ) : (

                        <Typography variant="body1">Cargando datos meteorológicos...</Typography>

                    )}

                </CardContent>
            </Card>
        </Paper>
    );
};

export default WeatherComponent;




















/*
import NavigationBar from "src/components/core/NavigationBar";
import './Weather';
import Grid from "@mui/material/Grid";

export default function weather() {
    return (
        <div>
            <Grid container marginTop={"30px"}>
                <Grid item md={3}>
                    <div className="caja">
                        hola
                    </div>
                </Grid>
                </Grid>
            </div>
    )
}
*/