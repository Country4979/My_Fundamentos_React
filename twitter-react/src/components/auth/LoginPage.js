import { useState } from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';
import { login } from './service';

import './LoginPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
const resetError = () => {setError(null)}
  const handleSubmit = async event => {
    event.preventDefault();
    
    setIsLoading(true);
    try {
      await login(credentials);
    } catch (error) {
      setError(error);
      return;
    }

    // Logged in
    
    onLogin();

    // Redirect to // Lo hacemos así por las reglas del Hooks
    const to = location.state?.from?.pathname || '/';  //Recuperamos el pathname desde el state de location en RequireAuth. Si falla alguno de los pasos no sigue evaluando y manda al home
    navigate(to)
  };

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const buttonDisabled =
    isLoading || !credentials.username || !credentials.password;

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-field"
          onChange={handleChange}
          value={credentials.username}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button
          type="submit"
          variant="primary"
          className="loginForm-submit"
          disabled={buttonDisabled}
        >
          Log in
        </Button>
        {/* <input
          type="file"
          name="photo"
          onChange={event => {
            console.log(event.target.files[0]);
          }}
        /> */}
      </form>
      {error && <div className="loginPage-error" onClick={resetError}>{error.message}</div>}
    </div>
  );
}

export default LoginPage;
