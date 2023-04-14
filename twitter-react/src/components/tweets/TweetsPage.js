import classNames from 'classnames';
//import './style.css';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';
import Button from '../shared/Button';
import { logout } from '../auth/service';
import Layout from '../../Layout/layout'

const styleInline = {
  backgroundColor: 'lightblue',
};

 const TweetsPage = (onLogout) => {
    const [tweets, setTweets] = useState([]); //Guarda los datos que obtiene del endpoint. Vacío de inicio para que no falle el map.
    
    useEffect(() => {
      getLatestTweets().then(tweets => setTweets(tweets)); //Se usa then pq getLatestTweets devuelve una promesa
    },[]);                                                          //Con el [] indicamos que se ejecute de nuevo si lo contenido del cual cree que depende useEffect ha cambiado en algo. Vacío es que no tiene dependencias => sólo se ejecuta una vez.

    const theme = 'dark';
    const className = classNames(
        'tweetsPage',
        {
            light: theme === 'light',
            dark: theme === 'dark',
        },
        'otherclass',
    );

    const handleClick = async () => {
      await logout();
      onLogout();
    };

  return (
    <Layout title="What's going on..." {...props}>
      <div 
          //className={className}
          className={styles.TweetsPage}
      >
        <Button onClick={onLogout}>
          Logout!
        </Button>
        <ul>
          {tweets.map(tweet => (
            <li key={tweet.id}>{tweet.content}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default TweetsPage;