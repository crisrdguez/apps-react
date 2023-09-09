import React from 'react';
import Section from './Section';
import calculadora from '../img/calculadora.png';
import tictactoe from '../img/tictactoe.png';
import clics from '../img/clics.png';
import lista from '../img/lista.png';
import '../styles/HomePage.css'; // Importa los estilos de la página de inicio

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Elige un proyecto</h1>
      <div className="section-container">
        <Section
          title="Calculadora"
          description="Calculadora hecha con React. con ella podrás sumar y restar sin usar los dedos"
          imagen={calculadora}
          link="https://calculadora-app-react-crisdev.netlify.app"
        />
        <Section
          title="Tic-Tac-Toe"
          description="Juega al clásico tres en raya"
          imagen={tictactoe}
          link="https://tictactoe-game-react-crisdev.netlify.app"
        />
        <Section
          title="Contador de clics"
          description="¿Cuántos clics puedes dar en 10 segundos?"
          imagen={clics}
          link="https://contador-clics-app-react-crisdev.netlify.app/"
        />
        <Section
          title="Listado de tareas"
          description="Listado de tareas"
          imagen={lista}
          link="https://listadotareas-app-react-crisdev.netlify.app/"
        />
      </div>
    </div>
  );
}

export default HomePage;