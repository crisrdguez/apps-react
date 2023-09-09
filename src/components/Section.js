import React from 'react';

const Section = ({ title, description, imagen, link }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{description}</p>
      <img
          style={{ width: 'auto', height: '200px' }}
          src={imagen}
          alt="imagen del proyecto"/>
      <a href={link}>Ir al proyecto</a>
    </div>
  );
}

export default Section;