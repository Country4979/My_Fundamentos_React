import classNames from 'classnames';
// import './styles.css';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';
import Button from '../shared/Button';
import Layout from '../Layout/layout';

const styleInline = {
  backgroundColor: 'lightblue',
};

const TweetsPage = props => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then(tweets => setTweets(tweets));
  }, []); //Guarda los datos que obtiene del endpoint. Vacío de inicio para que no falle el map.                                                        //Con el [] indicamos que se ejecute de nuevo si lo contenido del cual cree que depende useEffect ha cambiado en algo. Vacío es que no tiene dependencias => sólo se ejecuta una vez.

  const theme = 'dark';
  const className = classNames(
    'tweetsPage',
    {
      light: theme === 'light',
      dark: theme === 'dark',
    },
    'otherclass',
  );

  return (
    <Layout title="What's going on..." {...props}>
      <div
        //   className={className}
        className={styles.tweetsPage}
        //   style={{
        //     backgroundColor: theme === 'light' ? 'lightblue' : 'darkblue',
        //   }}
      >
         {!!tweets.length ? (
          <ul>
            {tweets.map(tweet => (
              <li key={tweet.id}>{tweet.content}</li>
            ))}
          </ul>
        ) : (
          <Button>Be the first one...</Button>
        )}
      </div>
    </Layout>
  );
};

export default TweetsPage;