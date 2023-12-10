import NavigationBar from "src/components/core/NavigationBar";
import Grid from "@mui/material/Grid";
import telefono from "./iconos/icons8-celular-50.png";
import correo from "./iconos/icons8-correo-50.png"
import gps from "./iconos/icons8-gps-50.png"
import reloj from "./iconos/icons8-reloj-50.png"

export default function infoenlaces() {
    const listStyle = {
        listStyle: 'none',
        paddingLeft: 0,
    };

    const listItemStyle = {
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
    };

    const iconStyle = {
        marginRight: "8px",
        width: "20px", // Ajusta el tamaño según sea necesario
        height: "20px",
    };

    return (
        <div>
            <Grid container marginTop={"10px"}>
            <hr style={{ width: '100%', backgroundColor: 'black', height: '2px', border: 'none', marginTop: '10px' }} />
                <Grid item md={6} className="parrafo">
                
                    <div>
                        <h1>CHATEAU</h1>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                <img src={gps} alt="GPS" style={iconStyle} />
                                Canet de Mar, Barcelona 08360, España
                            </li>
                            <li style={listItemStyle}>
                                <img src={reloj} alt="Reloj" style={iconStyle} />
                                Lunes a Viernes 08:00 a 18:00
                            </li>
                            <li style={listItemStyle}>
                                <img src={telefono} alt="Teléfono" style={iconStyle} />
                                +34 655696480
                            </li>
                            <li style={listItemStyle}>
                                <img src={correo} alt="Correo" style={iconStyle} />
                                perezmm@infomoi.cat
                            </li>
                        </ul>
                        <div>
                            <button>Español</button>
                            <button>Inglés</button>
                            <button color="yellow">LIGHT</button>
                            <button>DARK</button>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} className="parrafo">
                    <div>
                        <h1>Enlaces Rápidos</h1>
                    </div>
                    <ul style={listStyle}>
                        <li style={listItemStyle}>
                            Inicio
                        </li>
                        <li style={listItemStyle}>
                            Historia
                        </li>
                        <li style={listItemStyle}>
                            Vinos
                        </li>
                        <li style={listItemStyle}>
                            Contacto
                        </li>
                    </ul>
                </Grid>

            </Grid>

        </div>
    );
}