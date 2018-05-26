import React from 'react';
import PostField from '../../Components/Common/PostField';
import { FeedContent } from '../../Components/FeedContent';
import { connect } from 'react-redux';
import InAppHeader from '../../Components/Common/Header/InAppHeader';
import {
  fetchAllFeedListenerOn,
  fetchAllFeedListenerOff
} from '../../Actions/FetchAllFeed';
export class Home extends React.Component {
  render() {
    return (
      <div>
        <InAppHeader
          notSignedAction={() => this.props.history.push('/')}
          redirect={() => this.props.history.push('/')}
        />
        <div class="container">
          <PostField />
          {this.props.feeds &&
            this.props.feeds.map((content, index) => (
              <FeedContent content={content} key={index} />
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS LOGIN]]', state);
  return {
    feeds: state.feeds.feeds
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllFeedListenerOn: () => dispatch(fetchAllFeedListenerOn()),
    fetchAllFeedListenerOff: () => dispatch(fetchAllFeedListenerOff())
    // searchUsers: text => dispatch(searchUsers(text))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
