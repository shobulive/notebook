import React from 'react';
import PostField from '../../Components/Common/PostField';
import FeedContent from '../../Components/FeedContent';
import { connect } from 'react-redux';
import InAppHeader from '../../Components/Common/Header/InAppHeader';
import {
  fetchAllFeedListenerOn,
  fetchAllFeedListenerOff
} from '../../Actions/FetchAllFeed';
class Home extends React.Component {
  componentWillMount() {
    if (this.props.isLoggedIn) this.props.fetchAllFeedListenerOn();
  }
  // componentWillUnmount() {
  //   if (this.props.isLoggedIn) this.props.fetchAllFeedListenerOff();
  // }
  render() {
    console.log(this.props);
    return (
      <div>
        <InAppHeader
          notSignedAction={() => this.props.history.push('/')}
          redirect={() => this.props.history.push('/')}
        />
        <div class="container">
          <PostField />
          {this.props.feeds &&
            this.props.feeds
              .sort(
                (f1, f2) => parseFloat(f2.timestamp) - parseFloat(f1.timestamp)
              )
              .map((content, index) => (
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
    isLoggedIn: state.auth.isLoggedIn,
    feeds: state.feeds.feeds
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllFeedListenerOn: () => dispatch(fetchAllFeedListenerOn()),
    fetchAllFeedListenerOff: () => dispatch(fetchAllFeedListenerOff())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
