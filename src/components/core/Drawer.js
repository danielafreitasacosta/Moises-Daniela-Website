import { useState } from "react";
import { Drawer, IconButton, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import theme from "src/services/theme";
import { NavLink } from "react-router-dom";
import logoImage from './logo-light-new.png';
import logoImageDark from './logo-dark-new.png';


const DrawerResponsive = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    console.log(theme);

    const iconStyleDrawer = {
        marginRight: "5px",
        paddingTop: "20px",
        marginLeft: "15px",
        width: "50%",
        height: "50%",

    };
    const containerStyleDrawer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
    };
    const linkStyleDrawer = {
        paddingTop: "15px",
        paddingLeft: "15px",
        textDecoration: "none",
        fontsize: "1 rem",
        fontweight: "700",
        color: "theme.primary.main",

    };

    const [colorTheme, setColorTheme] = useState();




    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >


                <Stack sx={{ marginLeft: '1', padding: '2' }} >
                    {
                        colorTheme === 'light' ? (
                            <>
                                <img src={logoImage} alt="Logo" style={iconStyleDrawer} />
                            </>
                        ) : (
                            <img src={logoImageDark} alt="Logo" style={iconStyleDrawer} />
                        )
                    }

                    <NavLink to="/" style={linkStyleDrawer}>Inicio</NavLink>
                    <NavLink to="/history" style={linkStyleDrawer}>Historia</NavLink>
                    <NavLink to="/wine" style={linkStyleDrawer}>Vinos</NavLink>
                    <NavLink to="/contact" style={linkStyleDrawer}>Contacto</NavLink>


                </Stack>

                <IconButton onClick={() => setOpenDrawer(!openDrawer)}  >
                    <CancelIcon fontSize='large' color='primary' sx={{ edge: 'start', size: 'large' }} />
                </IconButton >

            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}  >
                <MenuIcon fontSize='large' color='primary' sx={{ edge: 'start' }} />
            </IconButton >
        </>
    )
}

export default DrawerResponsive;

