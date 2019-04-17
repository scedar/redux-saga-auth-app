export function getComments(state) {
  const allComments = state.commentsReducer.comments;

  let pagination = {
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} comments`,
    pageSizeOptions: ['1', '2', '5', '10', '25', '50', '100', '250', '500'],
  };

  return {
    name: `Comments`,
    tracker: state.commentsReducer.commentsTracker,
    timestamp: state.commentsReducer.commentsTimestamp,
    data: allComments,
    noRecordMessage: `No Comments Found`,
    pagination: pagination,
  }
}

export function getComment(state) {
  return {
    name: 'Comment',
    tracker: state.commentsReducer.commentTracker,
    timestamp: state.commentsReducer.commentTimestamp,
    data: state.commentsReducer.comment,
    noRecordMessage: 'No Comment Found',
  }
}

export function getNewComment(state) {
  return {
    name: 'New Comment',
    tracker: state.commentsReducer.newCommentTracker,
    timestamp: state.commentsReducer.newCommentTimestamp,
    data: state.commentsReducer.newComment,
  }
}

export function getUpdatedComment(state) {
  return {
    name: 'Updated Comment',
    tracker: state.commentsReducer.updatedCommentTracker,
    timestamp: state.commentsReducer.updatedCommentTimestamp,
    data: state.commentsReducer.updatedComment,
  }
}

export function getDeletedComment(state) {
  return {
    name: 'Deleted Comment',
    tracker: state.commentsReducer.deletedCommentTracker,
    timestamp: state.commentsReducer.deletedCommentTimestamp,
    data: state.commentsReducer.deletedComment,
  }
}

