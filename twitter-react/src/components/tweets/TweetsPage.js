import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button as={Link} to="/tweets/new" variant="primary">Create tweet</Button>
  </div>
);

const TweetsPage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    getLatestTweets().then(tweets =>{
      setTweets(tweets)
      setIsLoading(false)
    });
  }, []);


  return (
    <Layout title="What's going on..." {...props}>
      {isLoading ?
      (
        <div>Loading...</div>
      ):(
        <div>
          {!!tweets.length ? (
            <ul>
              {tweets.map(tweet => (
                <li key={tweet.id} >
                  <Link to={`/tweets/${tweet.id}`}>
                    <Tweet {...tweet} />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyList />
          )}
        </div>
      )}
    </Layout>
  );
};

export default TweetsPage;
