import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import './InfoTop.css';


export default function InfoTop() {
    
        return (
        <div>
            <Grid container className="info-container">
                <Grid item md={6}>
                    <div className="left">
                        Catas de vino y visita a la bodega
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="right">
                        Canet de Mar 08360 Barcelona, España
                    </div>
                </Grid>
           </Grid>
        </div>


        )
    
}