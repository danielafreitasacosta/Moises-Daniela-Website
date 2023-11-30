import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso
import InfoTop from "../info-top/InfoTop";

const Home = () => {
  return (
    <div className="image-grid">
      <div className="paragraf1">
        <InfoTop />
      </div>

      <hr style={{ width: '100%', backgroundColor: 'white', height: '2px', border: 'none', marginTop: '40px' }} />
      <NavigationBar />

    </div>
  );
};

export default Home;