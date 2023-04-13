import client from '../../api/client';

const tweetsUrl = '/api/tweets';

export const getLatestTweets = () => {
  return client.get(tweetsUrl);
};
