import NavigationBar from "src/components/core/NavigationBar";
import Grid from "@mui/material/Grid";
import './PackFotos.css';

export default function packfotos() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={2}>
                    <img src="images/h1-gallery-01.jpg" className="contimg"></img>
                </Grid>
                <Grid item md={2}>
                    <img src="images/h1-gallery-02.jpg" className="contimg"></img>
                </Grid>
                <Grid item md={2}>
                    <img src="images/h1-gallery-03.jpg" className="contimg"></img>
                </Grid>
                <Grid item md={2}>
                    <img src="images/h1-gallery-04.jpg" className="contimg"></img>
                </Grid>
                <Grid item md={2}>
                    <img src="images/h1-gallery-05.jpg" className="contimg"></img>
                </Grid>
                <Grid item md={2}>
                    <img src="images/h1-gallery-06.jpg" className="contimg"></img>
                </Grid>
            </Grid>
        </div>
    )
}