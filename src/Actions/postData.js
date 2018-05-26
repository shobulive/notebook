import { firebase } from '../FirebaseHelper';
import Firebase from 'firebase';
export const postContent = (authorID, authorName, content) => {
  return (dispatch, getState) => {
    const contentObj = {
      authorID,
      authorName,
      content,
      timestamp: Firebase.database.ServerValue.TIMESTAMP,
      comments: {}
    };
    firebase
      .database()
      .ref(`feed`)
      .push(contentObj);
  };
};
export const postComment = (contentID, authorID, authorName, content) => {
  return (dispatch, getState) => {
    const commentObj = {
      authorID,
      authorName,
      content,
      timestamp: Firebase.database.ServerValue.TIMESTAMP,
      replies: {}
    };
    firebase
      .database()
      .ref(`feed/${contentID}/comments`)
      .push(commentObj);
  };
};
export const postReply = (
  contentID,
  commentID,
  authorID,
  authorName,
  content
) => {
  return (dispatch, getState) => {
    const replyObj = {
      authorID,
      authorName,
      content,
      timestamp: Firebase.database.ServerValue.TIMESTAMP
    };
    console.log(replyObj);
    firebase
      .database()
      .ref(`feed/${contentID}/comments/${commentID}/replies`)
      .push(replyObj);
  };
};
