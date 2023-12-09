import NavigationBar from "src/components/core/NavigationBar";
import './History.css';
import Grid from "@mui/material/Grid";

export default function History() {
    return (

        <div className="history-page">

            <NavigationBar />
            <Grid container>
                <Grid item md={6} sx={{ backgroundColor: "white", height: "100%" }}>
                    <h1 className="parrafo">DESCUBRE LA HISTORIA DE NUESTROS VIÑEDOS</h1>

                    <p className="parrafo">
                        Hay que viajar muchos siglos atrás para encontrar el origen del romance entre Cataluña y los vinos. Griegos, romanos e íberos fueron los responsables de introducir los primeros viñedos en la región, plantados hace 2.500 años. Desde entonces el universo vinícola catalán no ha dejado de evolucionar y esparcirse por el territorio.

                        Resulta complicado elegir por donde empiezas a explorar el mundo vinícola en Cataluña por la variedad de experiencias de todo tipo para vivir alrededor del vino. En este sentido, es una apuesta segura elegir alguna de las bodegas, empresas o entidades incluidas en la marca Enoturismo Cataluña. El distintivo ha sido creado por la Agència Catalana de Turisme para reconocer la oferta de experiencias y actividades enoturísticas "gran reserva", con un elevado valor añadido y calidad.

                        El paisaje en la copa

                        Los vinos de Cataluña se organizan en once denominaciones de origen (DO), además de la DO del cava, que a la vez son doce maneras de descubrir el territorio. La cultura del vino está presente junto al Mediterráneo y llega incluso a los Pirineos, a más de 1.000 metros de altura. Los vinos de cada DO tienen una personalidad marcada por el clima, el paisaje y la idiosincrasia de la zona que puedes saborear en cada copa. Sentirás en el paladar la fuerza de la tramontana, la brisa marina o los matices de la 'llicorella' -un tipo de suelo de pizarra.

                        Conectan con el temperamento de estos vinos las experiencias enoturísticas que puedes hacer en las 12 DO.
                    </p>
                </Grid>
                <Grid item md={6} sx={{ backgroundColor: "white", height: "100%" }}>
                    <img
                        src="/images/catalunya-raims.jpg"
                        alt="Imagen del las uvas"
                        style={{ width: '90%', height: '90%', objectFit: 'cover', alignContent: 'space-between', margin: '10px' }}
                    />
                </Grid>
            </Grid>
        </div>


    )
}