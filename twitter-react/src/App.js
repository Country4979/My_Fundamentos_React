import TweetsPage from './components/tweets/TweetsPage';
import NewTweetPage from './Layout/NewTweetPage';
import './App.css';
import Button from './components/shared/Button';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <div className="App">
      {isLogged ? (
        <>
        <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
        <NewTweetPage onLogout={handleLogout} isLogged={isLogged}/>
        </>
      ) : (
         <LoginPage onLogin={handleLogin} />
      )};

      {/* <Button variant="secondary" onClick={event => console.log(event)}>
        Click me!
      </Button>
      <Button variant="primary" onClick={event => console.log(event)}>
        Click me!
      </Button>
      <Button variant="primary" disabled onClick={event => console.log(event)}>
        Click me!
      </Button> */}
    </div>
  );
}

export default App;
