import React, { Component } from 'react';
import faker from 'faker/locale/en';
import InAppHeader from '../../Components/Common/Header/InAppHeader';
import { PostField } from '../../Components/Common/PostField';
import { FeedContent } from '../../Components/FeedContent';
import { dummyPostData } from '../../temp/dummyPosts';
export class User extends React.Component {
  // <h2>User ID:{this.props.match.params.id}</h2>
  render() {
    return (
      <div>
        <InAppHeader />
        <div class="container">
          <div class="row">
            <div class="col-lg-1 col-md-1 col-sm-1" />
            <div class="col-lg-10 col-md-10 col-sm-10">
              <div class="float-left avatar-profile-container">
                <img
                  alt="profile-pic"
                  src={faker.image.avatar()}
                  class="avatar-profile"
                />
              </div>
              <img
                alt="cover"
                src={faker.image.transport()}
                class="cover-photo"
              />
              <span class="user-name">{faker.name.findName()}</span>
              <div class="content">
                <div class="w3-card app-bar">
                  <div class="float-right">
                    <button class="btn btn-default reply-btn app-bar-button ">
                      Timeline
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      About
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      Friends
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      Photos
                    </button>
                    <button class="btn btn-default reply-btn app-bar-button ">
                      <span>
                        {' '}
                        More <i class="glyphicon glyphicon-triangle-bottom" />
                      </span>
                    </button>
                  </div>
                </div>
                <div class="feed-margin">
                  <PostField />
                  {Object.values(dummyPostData).map(content => (
                    <FeedContent content={content} />
                  ))}
                </div>
              </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1" />
          </div>
        </div>
      </div>
    );
  }
}
