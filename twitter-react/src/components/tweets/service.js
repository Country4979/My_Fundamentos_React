import client from '../../api/client';

const tweetsUrl = '/api/tweets';

export const getLatestTweets = () => {
  const url = `${tweetsUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};

//Servicio para llamar al detalle del tweet
export const getTweet = tweetId => {
  // const url = tweetsUrl + '/' + tweetId
  const url = `${tweetsUrl}/${tweetId}`;
  return client.get(url);
};

export const createTweet = tweet => {
  const url = tweetsUrl;
  return client.post(url, tweet, {}); //El tercer parámetro es de configuración. Le decimos que el dato es de tipo data
};
