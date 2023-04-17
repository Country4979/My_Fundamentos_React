import { useEffect, useState } from 'react';
import { getLatestTweets } from './service';
import Button from '../shared/Button';
import Layout from '../layout/Layout';
import Tweet from './Tweet';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button variant="primary">Create tweet</Button>
  </div>
);

const TweetsPage = props => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then(tweets => setTweets(tweets));
  }, []);

  return (
    <Layout title="What's going on..." {...props}>
      <div>
        {!!tweets.length ? (
          <ul>
            {tweets.map(tweet => (
              <Tweet key={tweet.id} {...tweet} />
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Layout>
  );
};

export default TweetsPage;
