import TweetsPage from './components/tweets/TweetsPage';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import NewTweetPage from './components/tweets/NewTweetPage';
import TweetPage from './components/tweets/TweetPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import RequireAuth from './components/auth/RequireAuth';
import { AuthContextProvider } from './components/auth/context';

function App({ isInitiallyLogged }) {

  return (
    <div className="app">
      <AuthContextProvider isInitiallyLogged={isInitiallyLogged}>
        <Routes>
          <Route path="/login"
            element ={<LoginPage />} />
          <Route path="/tweets"
            element={<TweetsPage />} />
          <Route path="/tweets/:tweetId"
            element={<TweetPage />} />
          <Route path="tweets/new"
            element={
              <RequireAuth>
                <NewTweetPage />
              </RequireAuth>
              }
          />
          <Route path='/'
            element={<Navigate to="/tweets" />} /> 
          <Route path="/404"
            element={<div>404 | Not found</div>} />
          <Route path='*'
            element={<Navigate to="/404" />} />   
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
