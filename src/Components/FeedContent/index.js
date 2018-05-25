import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import { Comment } from './Comment';
import { InputBox } from './InputBox';
export class FeedContent extends React.Component {
  state = { showReplies: false };
  _renderPostHeader() {
    return (
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-1">
          <img src={faker.image.avatar()} class="avatar-post" alt="avatar" />
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10">
          <Link
            class="text-vertical-align"
            to={`/user/${this.props.content.authorID}`}
          >
            {this.props.content.authorName}
          </Link>
          <br />
          <span class="text-vertical-align time-stamp">10hrs ago</span>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1">
          <span class="glyphicon glyphicon-option-vertical" />
        </div>
      </div>
    );
  }
  _renderPostContent() {
    return (
      <div class="row minor-padding">
        <div>{this.props.content.content}</div>
      </div>
    );
  }
  _renderLikeCommentButton() {
    return (
      <div class="form-inline row">
        <div class="btn btn-default col-lg-6 col-md-6 col-sm-6 button-border">
          <i class="glyphicon glyphicon-thumbs-up" />
        </div>
        <div class="btn btn-default col-lg-6 col-md-6 col-sm-6 button-border">
          <i class="glyphicon glyphicon-comment" />
        </div>
      </div>
    );
  }
  _renderInputBox(type) {}
  _renderComments() {
    return (
      <div class="row comments">
        <InputBox type="comment" />
        <div class="w3-container">
          {Object.values(this.props.content.comments).map((comment, i) => (
            <Comment
              key={i}
              type="comment"
              content={comment.content}
              authorName={comment.authorName}
              authorID={comment.authorID}
              replies={Object.values(comment.replies)}
              renderReplies={(reply, i) => (
                <Comment
                  key={i}
                  type="reply"
                  content={reply.content}
                  authorName={reply.authorName}
                  authorID={reply.authorID}
                  replies={[]}
                />
              )}
            />
          ))}
        </div>
      </div>
    );
  }
  _renderComment(index, type, post, authorName, authorID, replies) {
    return (
      <div class="row minor-padding" key={index}>
        <div class="col-lg-1 col-md-1 col-sm-1">
          <img
            src={faker.image.avatar()}
            class="avatar-without-margin-big"
            alt="avatar"
          />
        </div>
        <div class="col-lg-11 col-md-11 col-sm-11">
          <div class="w3-card comment-card  minor-padding">
            <Link to={`/user/${authorID}`}>{authorName}</Link> {post}
          </div>
          <div class="row">
            <button class="reply-btn">Like</button>
            .
            <button class="reply-btn">Reply</button>
          </div>
          {this.state.showReplies ? (
            replies.map((reply, i) =>
              this._renderComment(
                i,
                'reply',
                reply.content,
                reply.authorName,
                reply.authorID,
                []
              )
            )
          ) : (
            <a onClick={() => this.setState({ showReplies: true })}>
              {replies[0].authorName}{' '}
              {(replies[1] ? ' and ' + replies[1].authorName : '') +
                ' replied to this comment'}
            </a>
          )}
          {type === 'comment' &&
            this.state.showReplies && <InputBox type={type} />}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div class="w3-card major-padding remove-bottom-padding feed-margin">
        {this._renderPostHeader()}
        {this._renderPostContent()}
        {this._renderLikeCommentButton()}
        {this._renderComments()}
      </div>
    );
  }
}
