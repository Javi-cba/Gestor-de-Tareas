import { useAuth0 } from '@auth0/auth0-react';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const CmpHeader = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <header className="App-header">
      <h1 style={{ fontFamily: 'monospace' }}>Taskify</h1>

      <section className="navbar">
        {isAuthenticated ? (
          <section className="logout">
            <img
              src={user.picture}
              alt={user.name}
              style={{ borderRadius: '50%', width: '50px' }}
            />
            <LogoutOutlined
              style={{ fontSize: '50px', cursor: 'pointer' }}
              onClick={() => logout({ returnTo: window.location.origin })}
            />
          </section>
        ) : (
          <LoginOutlined
            style={{ fontSize: '50px', cursor: 'pointer' }}
            onClick={() => loginWithRedirect()}
          />
        )}
      </section>
    </header>
  );
};

export default CmpHeader;
