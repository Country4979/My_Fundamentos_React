import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button as={Link} variant="primary" to="/tweets/new">
      Create tweet
    </Button>
  </div>
);

const TweetsPage = () => {
  const isMounted = useRef(false);

  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const tweets = await getLatestTweets();

      setTweets(tweets);
      setIsLoading(false);
    }

    fetchData();
  }, []);


  return (
    <Layout title="What's going on...">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {!!tweets.length ? (
            <ul>
              {tweets.map(tweet => (
                <li key={tweet.id}>
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