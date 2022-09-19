import logo from '../logo.svg';
import React, { useState } from 'react';
import './App.css';
import  StaticModal from './Modal';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 //DOM load event
window.addEventListener("DOMContentLoaded", () => {

  const spotlight = document.querySelector('.spotlight');

  let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

  window.addEventListener('mousemove', e => updateSpotlight(e));

  window.addEventListener('mousedown', e => {

      spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

      updateSpotlight(e);

  });

  window.addEventListener('mouseup', e => {

      spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

      updateSpotlight(e);

  });

  function updateSpotlight(e) {

      spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

  }
});
   return  (
    <div className="App">
      
      <header className="spotlight App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>La materia no se crea, tampoco se destruye solo se transforma.</h1>
          <p>La ley de la conservación de la materia, nuestra filosofía.
            (Lavoisier-Lomonosov)</p>
          
            <button className="btn-modal btn btn-danger" onClick={handleShow}>
        Donar Ahora!
      </button>
      </header>
      <StaticModal show={show} handleClose={handleClose} /> 
    </div>
  );
}

export default App;
