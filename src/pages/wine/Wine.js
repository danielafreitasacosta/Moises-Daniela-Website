import NavigationBar from "src/components/core/NavigationBar";
import './Wine.css';
import Grid from "@mui/material/Grid";

export default function wines() {
    return (
        <div className="wines-page">
            <NavigationBar />
            <div className="column">
                <Grid container>
                    <Grid item md={6}>
                        <p className="parrafo">
                            <h1>Vino Novell</h1>
                            Una de las principales características del vi novell es su versatilidad para crear maridajes. Al ser un producto de temporada, armoniza a la perfección con los de otoño: setas, calabazas, boniatos o alcachofas.

                            También se combina muy bien con croquetas, cordero a la brasa, o la simple pero exquisita tortilla de patatas. Las reinas de esta temporada son las castañas, así que con un crema de este fruto o con un caldo de navidad, tendrás una pareja perfecta.
                            Si volvemos a aquel refranero popular catalán, no hay que olvidar los platos con cerdo. Unos huevos estrellados irán de maravillas con los vinos de esta añada 2020.

                            El maridaje se puede hacer con un blanco como el Donzell Blanc 2020 (DO Penedès), que su punto fresco y carbónico ayuda a compensar la sensación grasa. El tinto Garrí Novell 2020 (DO Conca de Barberà) elaborado con syrah, puede ser otra de las opciones
                            Las bodegas

                            Las bodegas que se enmarcan dentro de esta propuesta, irán sugiriendo opciones de maridaje en su Web, para que puedas vivir la experiencia de armonización con diferentes propuestas culinarias.

                            Este año 2020, se ha sumado a la iniciativa una nueva bodega: Sanstravé, amparada bajo la Denominación de Origen Conca de Barberà. Así que ya forma parte de esas bodegas que buscan reivindicar la costumbre de probar el primer vino del año junto a Celler Carles Andreu, Celler Cooperatiu de l’Espolla, Cooperativa La Granada, Covides, Maset, Celler Masroig, Sant Josep Vins, Vinícola de Sarral y Vins Petxina.
    
                        </p>
                    </Grid>
                    <Grid item md={6}>
                        <img
                            src="/images/vi-novell-01.jpg"
                            alt="Imagen del vino"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}