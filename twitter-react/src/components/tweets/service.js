import client from '../../api/client';

const tweetsUrl = '/api/tweets';

export const getLatestTweets = () => {
  const url = `${tweetsUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};
