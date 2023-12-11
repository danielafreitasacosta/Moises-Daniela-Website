import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso
import InfoTop from "src/components/info-top/InfoTop";
import Vinya from "src/components/viñas/Vinya"
import PackFotos from "src/components/packfotos/PackFotos";
import Weather from "src/components/weather/Weather";
import Infoenlaces from "src/components/infoenlaces/Infoenlaces";
import { withTranslation } from "react-i18next"
import { Paper } from '@mui/material';
import Cookies from "src/components/cookies/Cookies";

const Home = ({ t, i18n }) => {
  return (
    <>
      <Cookies />
      <Paper>
        <div className="image-grid">
          <InfoTop />
          <NavigationBar />
          <h1>{t('present.titulo')}</h1>
          <p>{t('present.subtitulo')}</p>
        </div >
        <div>
          <Vinya />
        </div>
        <div>
          <PackFotos />
        </div>
        <div>
          <Weather />
        </div>
        <div>
          <Infoenlaces />
        </div>
      </Paper>
    </>
  );
};

export default withTranslation('home')(Home);