export function getPosts(state) {
  const allPosts = state.postsReducer.posts;

  let pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} posts`,
    pageSizeOptions: ['1', '2', '5', '10', '25', '50', '100', '250', '500'],
  };

  return {
    name: `Posts`,
    tracker: state.postsReducer.postsTracker,
    timestamp: state.postsReducer.postsTimestamp,
    data: allPosts,
    noRecordMessage: `No Posts Found`,
    pagination: pagination,
  }
}

export function getPost(state) {
  return {
    name: 'Post',
    tracker: state.postsReducer.postTracker,
    timestamp: state.postsReducer.postTimestamp,
    data: state.postsReducer.post,
    noRecordMessage: 'No Post Found',
  }
}

export function getNewPost(state) {
  return {
    name: 'New Post',
    tracker: state.postsReducer.newPostTracker,
    timestamp: state.postsReducer.newPostTimestamp,
    data: state.postsReducer.newPost,
  }
}

export function getUpdatedPost(state) {
  return {
    name: 'Updated Post',
    tracker: state.postsReducer.updatedPostTracker,
    timestamp: state.postsReducer.updatedPostTimestamp,
    data: state.postsReducer.updatedPost,
  }
}

export function getDeletedPost(state) {
  return {
    name: 'Deleted Post',
    tracker: state.postsReducer.deletedPostTracker,
    timestamp: state.postsReducer.deletedPostTimestamp,
    data: state.postsReducer.deletedPost,
  }
}

