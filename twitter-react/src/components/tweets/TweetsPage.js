import classNames from 'classnames';
//import './style.css';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getLatesTweets } from './service';
import { useEffect } from 'react';

/*const tweets = [
  {content: "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'IT'",
  userId: 1,
  updatedAt:'',
  id: 1,
  },
  {content: "Soy muy fan tuya, pero ahora no me acuerdo como te llamas",
  userId: 2,
  updatedAt:'',
  id: 2,
  }
]*/
 const TweetsPage = () => {
    const [tweets, setTweets] = useState([]);
    
    useEffect(() => {
        getLatesTweets().then(response => setTweets(response.data));
    },[]);

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