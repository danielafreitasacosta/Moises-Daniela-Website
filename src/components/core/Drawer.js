import { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText, Stack, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import theme from "src/services/theme";
import { NavLink } from "react-router-dom";
import logoImage from './logo-light-new.png';
import { withTranslation } from "react-i18next";


const DrawerResponsive = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    console.log(theme);

    const iconStyle = {
        marginRight: "5px",
        width: "25%",
        height: "25%",

    };
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
    };
    const linkStyle = {
        margin: "0 10px",
        textDecoration: "none",
        color: "black",
    };

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >


                <Stack>
                    <img src={logoImage} alt="Logo" style={iconStyle} />
                    <NavLink to="/" style={linkStyle}>Inicio</NavLink>
                    <NavLink to="/history" style={linkStyle}>Historia</NavLink>
                    <NavLink to="/wine" style={linkStyle}>Vinos</NavLink>
                    <NavLink to="/contact" style={linkStyle}>Contacto</NavLink>

                </Stack>

            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}  >
                <MenuIcon color="primary" />
            </IconButton >
        </>
    )
}

export default DrawerResponsive; 