import "./Home.css";
import React from 'react';
import NavigationBar from "src/components/core/NavigationBar";
import 'src/pages/home/Home' // Crearemos este archivo en el siguiente paso
import './App.css';

const Home = () => {
  return (
    <div className="image-grid">
       <NavigationBar/>
      <p>Hola me llamo Moisés</p>
      <hr style={{ width: '50%', backgroundColor: 'white', height: '2px', border: 'none' }} />
     
    </div>
  );
};

export default Home;