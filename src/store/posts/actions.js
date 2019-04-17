import * as types from './actionTypes'

/* Create a Post */
export const postCreate = function postCreate(post) {
	return {
		type: types.POST_CREATING,
		post
	}
};

export const postCreateSuccess = function postCreateSuccess(newPost) {
	return {
		type: types.POST_CREATE_SUCCESS,
		newPost,
	}
};

export const postCreateError = function postCreateError(error) {
	return {
		type: types.POST_CREATE_ERROR,
		error,
	}
};

export const resetPostCreate = function resetPostCreate() {
	return {
		type: types.RESET_POST_CREATE
	}
};


/* Update a Post */
export const postUpdate = function postUpdate(post) {
	return {
		type: types.POST_UPDATING,
		post
	}
};

export const postUpdateSuccess = function postUpdateSuccess(newPost) {
	return {
		type: types.POST_UPDATE_SUCCESS,
		newPost,
	}
};

export const postUpdateError = function postUpdateError(error) {
	return {
		type: types.POST_UPDATE_ERROR,
		error,
	}
};

export const resetPostUpdate = function resetPostUpdate() {
	return {
		type: types.RESET_POST_UPDATE
	}
};

/* Delete a Post */
export const postDelete = function postDelete(post) {
	return {
		type: types.POST_DELETING,
		post
	}
};

export const postDeleteSuccess = function postDeleteSuccess(newPost) {
	return {
		type: types.POST_DELETE_SUCCESS,
		newPost,
	}
};

export const postDeleteError = function postDeleteError(error) {
	return {
		type: types.POST_DELETE_ERROR,
		error,
	}
};

export const resetPostDelete = function resetPostDelete() {
	return {
		type: types.RESET_POST_DELETE
	}
};

/* Get a post */
export const postRequest = function postRequest(post) {
	return {
		type: types.POST_REQUESTING,
		post
	}
};

export const postRequestSuccess = function postRequestSuccess(post) {
	return {
		type: types.POST_REQUEST_SUCCESS,
		post,
	}
};

export const postRequestError = function postRequestError(error) {
	return {
		type: types.POST_REQUEST_ERROR,
		error,
	}
};

export const resetPostRequest = function resetPostRequest() {
	return {
		type: types.RESET_POST_REQUEST
	}
};

/* Get all posts */
export const postsRequest = function postsRequest(filterArr) {
	console.log("At Actions ", filterArr);
	return {
		type: types.POSTS_REQUESTING,
		filterArr
	}
};

export const postsRequestSuccess = function postsRequestSuccess(posts) {
	return {
		type: types.POSTS_REQUEST_SUCCESS,
		posts,
	}
};

export const postsRequestError = function postsRequestError(error) {
	return {
		type: types.POSTS_REQUEST_ERROR,
		error,
	}
};

export const resetPostsRequest = function resetPostsRequest() {
	return {
		type: types.RESET_POSTS_REQUEST
	}
};
