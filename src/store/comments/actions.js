import * as types from './actionTypes'

/* Create a Comment */
export const commentCreate = function commentCreate(comment) {
	return {
		type: types.COMMENT_CREATING,
		comment
	}
};

export const commentCreateSuccess = function commentCreateSuccess(newComment) {
	return {
		type: types.COMMENT_CREATE_SUCCESS,
		newComment,
	}
};

export const commentCreateError = function commentCreateError(error) {
	return {
		type: types.COMMENT_CREATE_ERROR,
		error,
	}
};

export const resetCommentCreate = function resetCommentCreate() {
	return {
		type: types.RESET_COMMENT_CREATE
	}
};


/* Update a Comment */
export const commentUpdate = function commentUpdate(comment) {
	return {
		type: types.COMMENT_UPDATING,
		comment
	}
};

export const commentUpdateSuccess = function commentUpdateSuccess(newComment) {
	return {
		type: types.COMMENT_UPDATE_SUCCESS,
		newComment,
	}
};

export const commentUpdateError = function commentUpdateError(error) {
	return {
		type: types.COMMENT_UPDATE_ERROR,
		error,
	}
};

export const resetCommentUpdate = function resetCommentUpdate() {
	return {
		type: types.RESET_COMMENT_UPDATE
	}
};

/* Delete a Comment */
export const commentDelete = function commentDelete(comment) {
	return {
		type: types.COMMENT_DELETING,
		comment
	}
};

export const commentDeleteSuccess = function commentDeleteSuccess(newComment) {
	return {
		type: types.COMMENT_DELETE_SUCCESS,
		newComment,
	}
};

export const commentDeleteError = function commentDeleteError(error) {
	return {
		type: types.COMMENT_DELETE_ERROR,
		error,
	}
};

export const resetCommentDelete = function resetCommentDelete() {
	return {
		type: types.RESET_COMMENT_DELETE
	}
};

/* Get a comment */
export const commentRequest = function commentRequest(comment) {
	return {
		type: types.COMMENT_REQUESTING,
		comment
	}
};

export const commentRequestSuccess = function commentRequestSuccess(comment) {
	return {
		type: types.COMMENT_REQUEST_SUCCESS,
		comment,
	}
};

export const commentRequestError = function commentRequestError(error) {
	return {
		type: types.COMMENT_REQUEST_ERROR,
		error,
	}
};

export const resetCommentRequest = function resetCommentRequest() {
	return {
		type: types.RESET_COMMENT_REQUEST
	}
};

/* Get all comments */
export const commentsRequest = function commentsRequest(filterArr) {
	return {
		type: types.COMMENTS_REQUESTING,
		filterArr
	}
};

export const commentsRequestSuccess = function commentsRequestSuccess(comments) {
	return {
		type: types.COMMENTS_REQUEST_SUCCESS,
		comments,
	}
};

export const commentsRequestError = function commentsRequestError(error) {
	return {
		type: types.COMMENTS_REQUEST_ERROR,
		error,
	}
};

export const resetCommentsRequest = function resetCommentsRequest() {
	return {
		type: types.RESET_COMMENTS_REQUEST
	}
};
