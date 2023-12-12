import Grid from "@mui/material/Grid";
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import './Infoenlaces.css';
import { Button, List, ListItem, ListItemButton, Paper, Link } from "@mui/material";
import Box from '@mui/material/Box';
import ColorSwitch from "../core/ColorSwitch";
import { useTheme } from "@emotion/react";

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

  const theme = useTheme();

  return (
    <>
      <Paper elevation={0}>
        <Grid className="fondo" container marginTop={"10px"}>
          <hr style={{ width: '100%', backgroundColor: 'black', height: '2px', border: 'none', marginTop: '0px' }} />


          <Grid item md={6} className="parrafo">


            <Paper elevation={0}>
              <ul>

                <li style={listItemStyle}>

                  <h1>CHATEAU</h1>

                </li>

                <li style={listItemStyle}>
                  <img src="images/iconos/icons8-gps-50.png" alt="GPS" style={iconStyle} />
                  {t('infoenlaces.ubicacion')}
                </li>
                <li style={listItemStyle}>
                  <img src="images/iconos/icons8-reloj-50.png" alt="Horario" style={iconStyle} />
                  {t('infoenlaces.horario')}
                </li>
                <li style={listItemStyle}>
                  <img src="images/iconos/icons8-celular-50.png" alt="Teléfono" style={iconStyle} />
                  +34 655696480
                </li>
                <li style={listItemStyle}>
                  <img src="images/iconos/icons8-correo-50.png" alt="Correo" style={iconStyle} />
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
                <List component="a" sx={{ color: 'primary.main', textDecorationLine: 'none', alignItems: 'center' }} >


                  <ListItemButton sx={{ color: 'primary.main', textDecorationLine: 'none', alignItems: 'center' }}>

                    <NavLink to="/">{t('global.inicio')}</NavLink>

                  </ListItemButton>




                  <ListItemButton>
                    <NavLink to="/notfound">{t('global.historia')}</NavLink>
                  </ListItemButton>




                  <ListItemButton>
                    <NavLink to="/notfound">{t('global.vinos')}</NavLink>
                  </ListItemButton>



                  <ListItemButton>

                    <NavLink to="/contact">{t('global.contacto')}</NavLink>
                  </ListItemButton>


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