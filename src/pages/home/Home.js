import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso
import InfoTop from "../info-top/InfoTop";
import Vinya from "../viñas/Vinya"
import PackFotos from "../packfotos/PackFotos";
import Weather from "./weather/Weather";
import Infoenlaces from "./infoenlaces/Infoenlaces";
import { withTranslation } from "react-i18next"

const Home = ({ t, i18n }) => {
  return (
    <>
      <div className="image-grid">
        <div className="paragraf1">
          <InfoTop />
        </div>
        <hr style={{ width: '100%', backgroundColor: 'white', height: '2px', border: 'none', marginTop: '20px' }} />
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
      <div>
        <Weather />
      </div>

    </>
  );
};

export default withTranslation('home')(Home);