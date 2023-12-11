import Grid from "@mui/material/Grid";
import telefono from "./iconos/icons8-celular-50.png";
import correo from "./iconos/icons8-correo-50.png"
import gps from "./iconos/icons8-gps-50.png"
import reloj from "./iconos/icons8-reloj-50.png"
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import './Infoenlaces.css';
import { Button, List, ListItem, ListItemButton, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import ColorSwitch from "../core/ColorSwitch";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button variant="contained" size="small" sx={{ margin: 1 }} onClick={() => changeLanguage('es')}>Español</Button>
      <Button variant="contained" size="small" sx={{ margin: 1 }} onClick={() => changeLanguage('en')}>English</Button>
      <ColorSwitch />
    </div>
  );
};

const InfoEnlaces = ({ t, i18n }) => {
  const listStyle = {
    listStyle: 'none',

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
    <>
      <Paper elevation={0}>
        <Grid container marginTop={"10px"}>
          <hr style={{ width: '100%', backgroundColor: 'black', height: '2px', border: 'none', marginTop: '10px' }} />


          <Grid item md={6} className="parrafo">


            <Paper elevation={0}>
              <ul>

                <li style={listItemStyle}>

                  <h1>CHATEAU</h1>

                </li>

                <li style={listItemStyle}>
                  <img src={gps} alt="GPS" style={iconStyle} />
                  {t('infoenlaces.ubicacion')}
                </li>
                <li style={listItemStyle}>
                  <img src={reloj} alt="Reloj" style={iconStyle} />
                  {t('infoenlaces.horario')}
                </li>
                <li style={listItemStyle}>
                  <img src={telefono} alt="Teléfono" style={iconStyle} />
                  +34 655696480
                </li>
                <li style={listItemStyle}>
                  <img src={correo} alt="Correo" style={iconStyle} />
                  perezmm@infomoi.cat
                </li>
                <li style={listItemStyle}>
                  <LanguageSwitcher />
                </li>
              </ul>

            </Paper>
          </Grid>



          <Grid item md={6} className="parrafo">
            <Paper elevation={0}>
              <ul>
                <li style={listItemStyle}>

                  <h1>{t('infoenlaces.tituloflash')}</h1>
                </li>
                <List component="a" sx={{ color: 'primary.main' }} >

                  <ListItem align-items='center'>
                    <ListItemButton sx={{ color: 'primary.main' }}  >
                      <NavLink to="/">{t('global.inicio')}</NavLink>
                    </ListItemButton>
                  </ListItem>


                  <ListItem align-items='center'>
                    <ListItemButton>
                      <NavLink to="/history">{t('global.historia')}</NavLink>
                    </ListItemButton>
                  </ListItem>

                  <ListItem align-items='center'>
                    <ListItemButton>
                      <NavLink to="/wine">{t('global.vinos')}</NavLink>
                    </ListItemButton>
                  </ListItem>

                  <ListItem align-items='center'>
                    <ListItemButton>
                      <NavLink to="/contact">{t('global.contacto')}</NavLink>
                    </ListItemButton>
                  </ListItem>

                </List>

              </ul>

            </Paper>
          </Grid>

        </Grid>
      </Paper>


    </>
  );
};

export default withTranslation('home')(InfoEnlaces);