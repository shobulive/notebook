import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
export class FeedContent extends React.Component {
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
        <div>{this.props.content.post}</div>
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
  _renderComments() {
    return (
      <div class="row comments">
        <div class="major-padding input-group">
          <div class="input-group-addon">
            <img
              src={faker.image.avatar()}
              class="avatar-without-margin"
              alt="avatar"
            />
          </div>
          <input class="form-control" />
          <span class="input-group-addon">
            <i class="glyphicon glyphicon-camera" />
          </span>
        </div>
      </div>
    );
  }
  render() {
    console.log(this.props.content);
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
