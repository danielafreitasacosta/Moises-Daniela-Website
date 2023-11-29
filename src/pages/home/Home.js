import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso

const Home = () => {
  return (
    <div className="image-grid">
       <NavigationBar/>
      <p>Hola me llamo Moisés</p>
     
    </div>
  );
};

export default Home;