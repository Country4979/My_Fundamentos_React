import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { getTweet } from './service';

const TweetPage = (props)  => {
    const params = useParams();
    const navigate = useNavigate();
    const [tweet, setTweet] = useState(null) //Guardo el tweet en el estado
    const [error, setError] = useState(null)

    useEffect (() => {
        getTweet(params.tweetId)
        .then(tweet => setTweet(tweet))
        .catch(error => {               //Método más óptimo pq evitamos un render
            if(error?.status === 404) {
                return <Navigate to="/404" />
            }
            setError(error);
        });
    }, [params.tweetId]);
    
    /*if(error?.status === 404) {       Forma declarativa de redireccionar cuando error 404. Es más visual.
        return <Navigate to="/404" />
    }*/

    //Podemos poner un loading para cuando el State es null, pq se va a mostrar siempre
  return (
    <Layout title="Tweet detail">{tweet && <div>{tweet.content}</div>}</Layout>
  );
};

export default TweetPage