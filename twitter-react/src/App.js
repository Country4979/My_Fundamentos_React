import TweetsPage from './components/tweets/TweetsPage';

import './App.css';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import NewTweetPage from './components/tweets/NewTweetPage';

function App(isInitiallyLogged) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      {isLogged ? (
        <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged} />
          <NewTweetPage onLogout={handleLogout} isLogged={isLogged} />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      </div>
  );
}

export default App;
