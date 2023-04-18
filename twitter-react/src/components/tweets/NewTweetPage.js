import { useState } from 'react';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import Photo from '../shared/Photo';
import Textarea from '../shared/Textarea';

import './NewTweetPage.css';
import { createTweet } from './service';
import { useNavigate } from 'react-router-dom';

const NewTweetPage = props => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState('')
  
  const MIN_CHARACTERS = 5;
  const MAX_CHARACTERS = 140;

  const handleChange = event => {
    setContent(event.target.value)
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const tweet = await createTweet({ content })  //Porque espero la respuesta del servidor con el Id del tweet
        navigate(`/tweets/${tweet.id}`)   //Redirecciona al detalle del aunucio que acabamos de crear
    } catch (error) {
      if (error.status === 401) {
        navigate('/login')
      }
    }
    
    //createTweet(data, {headers: {'content-type': 'multipart/form-data'}}) Nos vale para las imágenes

  };

  const isDisabled = isLoading || content.length < MIN_CHARACTERS;
  const characters = `${content.length} / ${MAX_CHARACTERS} characters`

  return (
    <Layout title="What are you thinking?">
      <div className="newTweetPage bordered">
        <div className="left">
          <Photo />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <Textarea
              name="content"
              className="newTweetPage-textarea"
              placeholder="Hey! What's up!"
              onChange={handleChange}
              value={content}
              maxLength={MAX_CHARACTERS}
            />
            <div className="newTweetPage-footer">
              <span className="newTweetPage-characters">{characters}</span>
              <Button
                type="submit"
                className="newTweetPage-submit"
                variant="primary"
                disabled={isDisabled}
              >
                Let's go!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewTweetPage;
