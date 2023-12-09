import NavigationBar from "src/components/core/NavigationBar";
import Grid from "@mui/material/Grid";
import telefono from "./iconos/icons8-celular-50.png";
import correo from "./iconos/icons8-correo-50.png"
import gps from "./iconos/icons8-gps-50.png"
import reloj from "./iconos/icons8-reloj-50.png"
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import './Infoenlaces.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button>LIGHT</button>
      <button>DARK</button>
    </div>
  );
};

const InfoEnlaces = ({ t, i18n }) => {
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
    <Grid container marginTop={"10px"}>
      <hr style={{ width: '100%', backgroundColor: 'black', height: '2px', border: 'none', marginTop: '10px' }} />
      <Grid item md={6} className="parrafo">

        <ul style={listStyle}>
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

      </Grid>
      <Grid item md={6} className="parrafo">
        <h1>{t('infoenlaces.tituloflash')}</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <NavLink to="/">{t('global.inicio')}</NavLink>
          </li>
          <li style={listItemStyle}>
            <NavLink to="/history">{t('global.historia')}</NavLink>
          </li>
          <li style={listItemStyle}>
            <NavLink to="/wine">{t('global.vinos')}</NavLink>
          </li>
          <li style={listItemStyle}>
            <NavLink to="/contact">{t('global.contacto')}</NavLink>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default withTranslation('home')(InfoEnlaces);