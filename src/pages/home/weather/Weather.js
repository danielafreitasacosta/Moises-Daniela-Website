import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Weather = () => {
    const containerStyle = {
        marginTop: "30px",
    };

    const boxStyle = {
        padding: "16px",
        textAlign: "center",
        color: "#333",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
    };

    return (
        <div>
            <div className="parrafo">
                <h1>Pronóstico del tiempo</h1>
            </div>
            <Grid container spacing={2} sx={containerStyle}>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <Grid item md={3} key={item}>
                        <Paper sx={boxStyle}>
                            Dia
                            ºC
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Weather;




















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