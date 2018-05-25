import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { InputBox } from './InputBox';
export class Comment extends React.Component {
  state = { showReplies: false };
  render() {
    const { type } = this.props;
    const { replies, content, authorName, authorID } = this.props.content;
    return (
      <div class="row minor-padding">
        <div class="col-lg-1 col-md-1 col-sm-1">
          <img
            src={faker.image.avatar()}
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
            <button class="reply-btn">Reply</button>
          </div>
          {this.state.showReplies
            ? replies.map((reply, i) => this.props.renderReplies(reply, i))
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
            this.state.showReplies && <InputBox type={'reply'} />}
        </div>
      </div>
    );
  }
}
