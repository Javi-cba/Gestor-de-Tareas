import './inicio.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const CmpInicio = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/tareas');
  };

  return (
    <section className="inicio-container">
      <div className="header">
        <h1>Bienvenido {isAuthenticated && user.name} a tu Gestor de Tareas</h1>
        <p>Organiza y gestiona tus tareas de manera eficiente.</p>
      </div>

      <div className="main-content" onClick={handleNavigate}>
        <div className="info-box">
          <h2>Tus Tareas</h2>
          <p>Visualiza y gestiona todas tus tareas pendientes y completadas.</p>
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO3ayUrDYBAH8Jy8K64P4En0CYTiTNW8gC/hRVDRGRF6UaugT+DJu6/g1hnrRRE39OLRghUvetFTJa5B6pLlaxL6/SGnJl/m15mkgcZxbL4CrEtA8oystSDb6zEki05aAiEQnxjWJ6PFjRXOW5BkBUgrPxXxsW9YxH/XAZYbZF32agoM8Q6MWkBcEPwcRS0GhvzWiQQhlTAdia2AONdxLIT//jZM3bXQVEd+3JdkMfTvCMtCaiCmghbii+1IjEE7Wr7Y0Wqm0cpN7rQDyyaSPgKr5Od3ezMJQZatbw+DmkkIcGkASKtfa8tDZiAulzq8TgzNSN93jDdmmYC4XOoAltP3om/9GCTZ9j5PPcT1IXzXRDU/W+5vSA0YwyL1EL7rYisTEPcXBJBc5qZ3ulMPcb0Lm/QkCiJxyCBJK7IeRkUkCvkLMTq312O6hsiLxI1IBGIC0XDISKHcBiTHdW+xpBfAB12BT54EBKk0Xh8hV2E7kQyEZd0EIoGO6JEJRMMhwHoNJGdAugEsE8NT+52BTxaxBvOLRAxaiC+2IzEG7Wj5YkcrC6OFKdicpoXA25/0tTRtQHIfHEJaTB2EZS0wxHtdwsOkpDN3SLoa6hUOGxsnUl4ANV6TWTHiqBkAAAAASUVORK5CYII="
              alt="Icono de tareas"
            />
          </div>
        </div>

        <div className="info-box" onClick={handleNavigate}>
          <h2>Agrega Nuevas Tarea</h2>
          <p>Agrega nuevas tareas fácilmente.</p>
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YsQ3CMBAFUFcwF/5NGIAKMQL9hYatGCD32YCaFDRI1NCCghQJJaIIRYzhP+mq2JKvsL4vIYiISEow36Pk/bViSQ+5QaeJttrvM6tWKHl5t2788jpufD6okcX2MEHpt/SHZ7eZ06BGivVuGs2v2TfSgHEJ83P6w/NZ0XiEVUXoai52b4N51VsoInmDkp2pMqRWsuMLghBKdhH5LVCyU8mOsQOx0MzOBDO7kZrZRf4AlOxUskPJzs+eKHn9jTclu4iIhKEepWBQKnyCSRMAAAAASUVORK5CYII="
              alt="Icono de agregar tarea"
            />
          </div>
        </div>

        <div className="info-box" onClick={handleNavigate}>
          <h2>Modifica tus Tareas</h2>
          <p>Actualiza y gestiona tus tareas de manera eficiente.</p>
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2UlEQVR4nO3ayUrDYBAH8Jy8K64P4En0CYTiTNW8gC/hRVDRGRF6UaugT+DJu6/g1hnrRRE39OLRghUvetFTJa5B6pLlaxL6/SGnJl/m15mkgcZxbL4CrEtA8oystSDb6zEki05aAiEQnxjWJ6PFjRXOW5BkBUgrPxXxsW9YxH/XAZYbZF32agoM8Q6MWkBcEPwcRS0GhvzWiQQhlTAdia2AONdxLIT//jZM3bXQVEd+3JdkMfTvCMtCaiCmghbii+1IjEE7Wr7Y0Wqm0cpN7rQDyyaSPgKr5Od3ezMJQZatbw+DmkkIcGkASKtfa8tDZiAulzq8TgzNSN93jDdmmYC4XOoAltP3om/9GCTZ9j5PPcT1IXzXRDU/W+5vSA0YwyL1EL7rYisTEPcXBJBc5qZ3ulMPcb0Lm/QkCiJxyCBJK7IeRkUkCvkLMTq312O6hsiLxI1IBGIC0XDISKHcBiTHdW+xpBfAB12BT54EBKk0Xh8hV2E7kQyEZd0EIoGO6JEJRMMhwHoNJGdAugEsE8NT+52BTxaxBvOLRAxaiC+2IzEG7Wj5YkcrC6OFKdicpoXA25/0tTRtQHIfHEJaTB2EZS0wxHtdwsOkpDN3SLoa6hUOGxsnUl4ANV6TWTHiqBkAAAAASUVORK5CYII="
              alt="Icono de reportes"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>¡Comienza a organizarte hoy mismo!</p>
      </div>
    </section>
  );
};

export default CmpInicio;
