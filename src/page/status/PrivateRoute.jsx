import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spin size="large" />;
  }

  // si no está autenticado, redirige a una página de "Unauthorized"
  if (!isAuthenticated) {
    return <Navigate to="/unauthorized" />;
  }

  // muestra el componente hijo
  return children;
};

export default PrivateRoute;
