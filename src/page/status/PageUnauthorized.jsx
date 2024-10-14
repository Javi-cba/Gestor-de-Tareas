import React from 'react';

const Unauthorized = () => {
  return (
    <div>
      <img
        style={{ width: '30rem', height: '15rem', borderRadius: '1rem' }}
        src="https://www.bluehost.com/blog/wp-content/smush-webp/2023/06/what-is-a-401-error-1024x576.png.webp"
        alt="error"
      />
      <h1 style={{ color: '#2C76DC', margin: '0rem' }}>No autorizado</h1>
      <p style={{ color: '#000000', fontWeight: 'bold' }}>
        No estás autorizado para acceder a esta página. Inicia sesión primero.
      </p>
    </div>
  );
};

export default Unauthorized;
