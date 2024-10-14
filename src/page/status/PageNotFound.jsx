const PageNotFound = () => {
  return (
    <div>
      <img
        style={{ width: '30rem', height: '15rem', borderRadius: '1rem' }}
        src="https://mi-proyect1.s3.us-east-2.amazonaws.com/404_error-h.png"
        alt="error"
      />
      <h1>No encontrado</h1>
      <p>No pudimos encontrar la página solicitada.</p>
    </div>
  );
};
export default PageNotFound;
