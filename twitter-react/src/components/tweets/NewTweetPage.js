import Layout from '../layout/Layout';
import Button from '../shared/Button';
import Photo from '../shared/Photo';
import Textarea from '../shared/Textarea';

import './NewTweetPage.css';

const NewTweetPage = props => {
  return (
    <Layout title="What are you thinking?" {...props}>
      <div className="newTweetPage bordered">
        <div className="left">
          <Photo />
        </div>
        <div className="right">
          <form>
            <Textarea
              className="newTweetPage-textarea"
              placeholder="Hey! What's up!"
            />
            <div className="newTweetPage-footer">
              <span className="newTweetPage-characters">...characters</span>
              <Button
                type="submit"
                className="newTweetPage-submit"
                variant="primary"
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
