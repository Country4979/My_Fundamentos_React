import classNames from 'classnames';
//import './style.css';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';

const styleInline = {
  backgroundColor: 'lightblue',
};

 const TweetsPage = () => {
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

  return (
    <div 
        //className={className}
        className={styles.TweetsPage}
    >
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default TweetsPage;