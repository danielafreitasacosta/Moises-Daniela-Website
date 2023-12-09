import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { t } from 'i18next';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);

    const containerStyle = {
        marginTop: "30px",
    };

    const boxStyle = {
        padding: "16px",
        textAlign: "center",
        color: "#333",
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
    }, []); // La dependencia vacía asegura que useEffect solo se ejecute una vez al montar el componente
    console.log(weatherData);
    return (
        <Card>
            <CardContent>
                {weatherData ? (
                    <div>
                        <div className="parrafo">
                            <h1>{t('clima.titulo')}</h1>
                        </div>
                        <Grid container spacing={2} sx={containerStyle}>
                            <Grid item md={3}>
                                <Paper sx={boxStyle}>
                                    <div>{`Día ${format(new Date(weatherData.pronostico.hoy['@attributes'].fecha), 'dd')}`}</div>
                                    <div>Max: {weatherData.temperaturas.max}ºC</div>
                                    <div>Min: {weatherData.temperaturas.min}ºC</div>
                                </Paper>
                            </Grid>
                            {weatherData.proximos_dias.map((item) => (
                                <Grid item md={3} key={item}>
                                    <Paper sx={boxStyle}>
                                        <div>
                                            {`Día ${format(new Date(item['@attributes'].fecha), 'dd')}`}
                                        </div>
                                        <div>Max: {item.temperatura.maxima}ºC</div><div>Min: {item.temperatura.minima}ºC</div>
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