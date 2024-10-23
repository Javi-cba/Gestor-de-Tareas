import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import CmpHeader from './components/publico/CmpHeader';
import PageInicio from './page/publico/PageInicio';
import PageTask from './page/privado/PageTask';
import Unauthorized from './page/status/PageUnauthorized';
import NotFound from './page/status/PageNotFound';
import PrivateRoute from './page/status/PrivateRoute';
import CmpLoad from './components/publico/CmpLoad';
import './App.css';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <CmpLoad />;
  }

  return (
    <div className="App">
      <Router>
        <CmpHeader /> {/* Siempre se muestra */}
        <Routes>
          {/* HOMEE*/}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<PageInicio />} />

          {/* Rutas protegidas CRUD TASK*/}
          <Route
            path="/tareas"
            element={
              <PrivateRoute>
                <PageTask />
              </PrivateRoute>
            }
          />
          <Route
            path="tareas/crear"
            element={
              <PrivateRoute>
                <PageTask />
              </PrivateRoute>
            }
          />

          <Route
            path="tareas/edit/:id"
            element={
              <PrivateRoute>
                <PageTask />
              </PrivateRoute>
            }
          />

          {/* Rutas de error */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
