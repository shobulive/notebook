export const dummyPostData = {
  1: {
    authorID: 0,
    authorName: 'Harry Potter',
    post: "What's up? How is it going?",
    timestamp: 'Fri May 25 2018 11:36:47 GMT+0530 (IST)',
    comments: {
      1: {
        authorID: 0,
        authorName: 'Harry Potter',
        content: 'Nm. Just kicking some boots',
        timestamp: 'Fri May 25 2018 11:40:47 GMT+0530 (IST)',
        replies: {
          authorID: 1,
          authorName: 'Harry Potter',
          content: 'Oh same here',
          timestamp: 'Fri May 25 2018 12:36:47 GMT+0530 (IST)'
        }
      },
      2: {
        authorID: 0,
        authorName: 'Harry Potter',
        content: 'Nm. Just kicking some boots',
        timestamp: 'Fri May 25 2018 11:38:47 GMT+0530 (IST)',
        replies: {
          authorID: 1,
          authorName: 'Harry Potter',
          timestamp: 'Fri May 25 2018 11:42:47 GMT+0530 (IST)',
          content: 'Oh same here'
        }
      }
    }
  },
  2: {
    authorID: 0,
    authorName: 'Harry Potter',
    post: "What's up? How is it going?",
    comments: {
      1: {
        authorID: 0,
        authorName: 'Harry Potter',
        content: 'Nm. Just kicking some boots',
        replies: {
          authorID: 1,
          authorName: 'Harry Potter',
          content: 'Oh same here'
        }
      },
      2: {
        authorID: 0,
        authorName: 'Harry Potter',
        content: 'Nm. Just kicking some boots',
        replies: {
          authorID: 1,
          authorName: 'Harry Potter',
          content: 'Oh same here'
        }
      }
    }
  }
};
