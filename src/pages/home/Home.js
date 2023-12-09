import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso
import InfoTop from "../../components/info-top/InfoTop";
import Vinya from "../../components/viñas/Vinya"
import WeatherCard from "src/components/index/WeatherCard";
import PackFotos from "../../components/packfotos/PackFotos";
import Weather from "../../components/weather/Weather";
import Infoenlaces from "../../components/infoenlaces/Infoenlaces";
import { withTranslation } from "react-i18next"
import Titulo from "src/components/titulo/Titulo";

const Home = ({ t, i18n }) => {
  return (
    <>
      <div className="image-grid" >
        <InfoTop />
        <NavigationBar />
        <Titulo />
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
    </>
  );
};

export default withTranslation('home')(Home);