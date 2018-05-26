import React from 'react';
import { connect } from 'react-redux';
class InputBox extends React.Component {
  ref;
  render() {
    const { type } = this.props;
    return (
      <div class="major-padding input-group">
        <div class="input-group-addon">
          <img
            src={this.props.currentUser && this.props.currentUser.profilePic}
            class="avatar-without-margin"
            alt="avatar"
          />
        </div>

        <input
          {...this.props}
          onChange={this.props.onChange}
          class="form-control"
          placeholder={
            type === 'reply'
              ? 'Type your reply here...'
              : 'Type your comment here...'
          }
          value={this.props.value}
          onKeyDown={event => {
            if (event.keyCode === 13) this.props.sendPost();
          }}
        />
        <span class="input-group-addon">
          <i class="glyphicon glyphicon-camera" />
        </span>
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
export default connect(mapStateToProps, null)(InputBox);
