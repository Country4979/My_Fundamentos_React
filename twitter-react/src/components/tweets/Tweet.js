import React from 'react';
//import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import LikeButton from './LikeButton';
import Photo from '../shared/Photo';
import './Tweet.css';

const Tweet = ({ content, updatedAt, user, likes }) => {
  return (
    <article className="tweet bordered">
      <div className="left">
        <Photo className="tweet-photo" />
      </div>
      <div className="right">
        <div className="tweet-header">
          <span className="tweet-name">{user.name}</span>
          <span className="tweet-username">{user.username}</span>
          <span className="tweet-separator">·</span>
          
        </div>
        <div>
          {content}
          <div className="tweet-actions">
            <LikeButton
              onLike={event => console.log(event)}
              likes={likes.length}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
