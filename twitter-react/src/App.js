import TweetsPage from './components/tweets/TweetsPage';

import './App.css';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import NewTweetPage from './components/tweets/NewTweetPage';
import TweetPage from './components/tweets/TweetPage';
import { Route, Routes, Navigate } from 'react-router-dom';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element ={<LoginPage onLogin={handleLogin} />}></Route>
        <Route path="/tweets" element={<TweetsPage onLogout={handleLogout} isLogged={isLogged} />} />
        <Route path="/tweets/:tweetId" element={<TweetPage onLogout={handleLogout} isLogged={isLogged} />} />
        <Route path="tweets/new" element={<NewTweetPage onLogout={handleLogout} isLogged={isLogged} />} />
        <Route path='/' element={<Navigate to="/tweets" />} /> 
        <Route path="/404" element={<div>404 | Not found</div>} />
        <Route path='*' element={<Navigate to="/404" />} />   
      </Routes>
    </div>
  );
}

export default App;
