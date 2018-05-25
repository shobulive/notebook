import React from 'react';
import faker from 'faker';
export class PostField extends React.Component {
  render() {
    return (
      <div class="w3-card minor-padding">
        <div class="input-group">
          <div class="input-group-addon">
            <img src={faker.image.avatar()} class="avatar-post" alt="avatar" />
          </div>
          <textarea
            class="form-control"
            rows="4"
            placeholder="What's kicking?..."
          />
        </div>
        <button class="btn-login w3-round-xxlarge minor-padding feed-margin flex-self">
          Post
        </button>
      </div>
    );
  }
}
