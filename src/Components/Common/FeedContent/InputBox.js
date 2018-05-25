import faker from 'faker/locale/en';
import React from 'react';
export class InputBox extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <div class="major-padding input-group">
        <div class="input-group-addon">
          <img
            src={faker.image.avatar()}
            class="avatar-without-margin"
            alt="avatar"
          />
        </div>
        <input
          class="form-control"
          placeholder={
            type === 'reply'
              ? 'Type your reply here...'
              : 'Type your comment here...'
          }
        />
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-camera" />
        </span>
      </div>
    );
  }
}
