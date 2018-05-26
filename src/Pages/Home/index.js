import React from 'react';
import { PostField } from '../../Components/Common/PostField';
import { FeedContent } from '../../Components/FeedContent';
import { dummyPostData } from '../../temp/dummyPosts';
import InAppHeader from '../../Components/Common/Header/InAppHeader';
export class Home extends React.Component {
  render() {
    return (
      <div>
        <InAppHeader redirect={() => this.props.history.push('/')} />
        <div class="container">
          <PostField />
          {Object.values(dummyPostData).map((content, index) => (
            <FeedContent content={content} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
