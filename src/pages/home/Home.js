import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso
import InfoTop from "../info-top/InfoTop";
import Vinya from "../viñas/Vinya"
import WeatherCard from "src/components/index/WeatherCard";

const Home = () => {
  return (
    <>
    <div className="image-grid">
      <div className="paragraf1">
        <InfoTop />
      </div>

      <hr style={{ width: '100%', backgroundColor: 'white', height: '2px', border: 'none', marginTop: '40px' }} />
      <NavigationBar />

      <h1> CONOCE NUESTROS VINOS  </h1>
      <hr style={{ width: '25%', backgroundColor: 'white' }} />
    
    </div >
    <div>
      <Vinya />
    </div>
    <div>
      <WeatherCard />
    </div>
    </>
  );
};

export default Home;