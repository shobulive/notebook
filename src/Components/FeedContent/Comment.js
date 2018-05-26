import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import InputBox from './InputBox';
import { connect } from 'react-redux';
import { postReply } from '../../Actions/postData';
import { _returnTimeAgoStamp } from './TimeUtil';

class Comment extends React.Component {
  state = { showReplies: false, replyText: '' };
  ref;
  render() {
    const { type, postID } = this.props;
    const {
      replies,
      content,
      authorName,
      authorID,
      key,
      timestamp
    } = this.props.content;
    const { timeNum, timeUnit } = _returnTimeAgoStamp(timestamp);
    return (
      <div class="row minor-padding">
        <div class="col-lg-1 col-md-1 col-sm-1">
          <img
            src={
              this.props.uID === authorID
                ? this.props.currentUser && this.props.currentUser.profilePic
                : faker.image.avatar()
            }
            class="avatar-without-margin-big"
            alt="avatar"
          />
        </div>
        <div class="col-lg-11 col-md-11 col-sm-11">
          <div class="w3-card comment-card  minor-padding">
            <Link to={`/user/${authorID}`}>{authorName}</Link> {content}
          </div>
          <div class="row">
            <button class="reply-btn">Like</button>
            .
            <button
              class="reply-btn"
              onClick={() => {
                this.setState({ showReplies: true });
              }}
            >
              Reply
            </button>
            {timeNum} {timeUnit}
            {' ago'}
          </div>
          {replies && this.state.showReplies
            ? replies
                .sort(
                  (f1, f2) =>
                    parseFloat(f2.timestamp) - parseFloat(f1.timestamp)
                )
                .map((reply, i) => this.props.renderReplies(reply, i))
            : replies.length > 0 && (
                <a onClick={() => this.setState({ showReplies: true })}>
                  {replies[0].authorName}{' '}
                  {(replies[1] ? ' and ' + replies[1].authorName : '') +
                    ' replied to this comment'}{' '}
                  . {replies.length}{' '}
                  {replies.length === 1 ? 'Reply' : 'Replies'}
                </a>
              )}
          {type === 'comment' &&
            this.state.showReplies && (
              <InputBox
                type={'reply'}
                value={this.state.replyText}
                onChange={event =>
                  this.setState({ replyText: event.target.value })
                }
                sendPost={event => {
                  if (this.state.replyText.length > 0) {
                    this.props.postReply(
                      postID,
                      key,
                      authorID,
                      authorName,
                      this.state.replyText
                    );
                    this.setState({ replyText: '' });
                  }
                }}
              />
            )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS PostFild]]', state);
  return {
    currentUser: state.auth.currentUser,
    uID: state.auth.uID
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postReply: (postID, key, authorID, authorName, content) =>
      dispatch(postReply(postID, key, authorID, authorName, content))
    // fetchAllFeedListenerOff: () => dispatch(fetchAllFeedListenerOff())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
