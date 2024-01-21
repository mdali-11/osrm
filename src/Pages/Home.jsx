import React from 'react';
import Navbar from '../Components/Navbar';
// import films from '../Links/films1.jpg';
import film from "../Links/pexels-kateryna-babaieva-2760242.jpg"

const Home = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ width: '100%', zIndex: '100' }}>
                <Navbar />
            </div>
            <div style={{ position: 'relative', background: 'black',  width: '100%', height: '80vh' , top:"-13vh" }}>
      <div style={{ width: '44%', position: 'absolute', top: '30%', left: '10%', zIndex: '100', color: 'white' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', textAlign: 'left' , alignItems:"start" }}>
          <h1 style={{ fontSize: '3rem', color: 'white' }}>ITA CUS SITA <span style={{ color: '#62BD57' }}>DOLUPTATUR</span></h1>
          <p style={{ color: 'white', marginTop: '-15px' }}>
            Uptatio est poresto rumquibus repedias in rehendus, volupta audam, quis quae volest fugiate
            molupta doloribus landuci seruptat volorem voloreptatur.
          </p>
          <button style={{ padding: '10px', background: '#62BD57', color: '#fff', cursor: 'pointer' }}>
            Read More
          </button>
        </div>
      </div>
      <img style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)' }} src={film} alt="" />
    </div>
        </div>
    );
};

export default Home;
