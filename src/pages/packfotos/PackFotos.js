import NavigationBar from "src/components/core/NavigationBar";
import './PackFotos';
import Grid from "@mui/material/Grid";

export default function packfotos() {
    return (
        <div>
            <Grid container marginTop={"10px"} >
                <Grid item md={2} >
                    <div className="caja">
                        <img
                            src="/images/h1-gallery-01.jpg"
                            alt="copa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="caja">
                        <img
                            src="/images/h1-gallery-02.jpg"
                            alt="copa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="caja">
                        <img
                            src="/images/h1-gallery-03.jpg"
                            alt="copa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="caja">
                        <img
                            src="/images/h1-gallery-04.jpg"
                            alt="copa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="caja">
                        <img
                            src="/images/h1-gallery-05.jpg"
                            alt="copa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="caja">
                        <img
                            src="/images/h1-gallery-06.jpg"
                            alt="copa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}