import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import PostService from './services'

/* Create Post Flow */
function* postCreateFlow(action) {
	try {
		const {post} = action;
		const createdPost = yield call(PostService.createPost, post);

		if (createdPost === 200) {
			yield put(actions.postCreateSuccess(createdPost.data))

		} else {
			yield put(actions.postCreateError(createdPost.message))
		}


	} catch (error) {
		yield put(actions.postCreateError(error))
	}
}

/* Update Post Flow */
function* postUpdateFlow(action) {
	try {
		const {post} = action;
		const updatedPost = yield call(PostService.updatePost, post);

		if (updatedPost === 200) {
			yield put(actions.postUpdateSuccess(updatedPost.data))
		} else {
			yield put(actions.postUpdateError(updatedPost.message))
		}


	} catch (error) {
		yield put(actions.postUpdateError(error))
	}
}


/* Delete Post Flow */
function* postDeleteFlow(action) {
	try {
		const {post} = action;
		const deletedPost = yield call(PostService.deletePost, post);

		if (deletedPost === 200) {
			yield put(actions.postDeleteSuccess(deletedPost.data))
		} else {
			yield put(actions.postDeleteError(deletedPost.message))
		}


	} catch (error) {
		yield put(actions.postDeleteError(error))
	}
}

/* Get Post Flow */
function* postRequestFlow(action) {
	try {
		const {post} = action;
		const posts = yield call(PostService.getPost, post);

		yield put(actions.postRequestSuccess(posts))
	} catch (error) {
		yield put(actions.postRequestError(error))
	}
}

/* Get Posts Flow */
function* postsRequestFlow(action) {
	try {
		const {filterArr} = action;
		const posts = yield call(PostService.getPosts, filterArr);

		if (posts.status === 200) {
			yield put(actions.postsRequestSuccess(posts.data));
			yield put(actions.resetPostsRequest())
		} else {
			yield put(actions.postsRequestError(posts.error))
		}
	} catch (error) {
		yield put(actions.postsRequestError(error))
	}
}

/* Watcher */
function* postsWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.POST_CREATING, postCreateFlow),
		takeLatest(types.POST_UPDATING, postUpdateFlow),
		takeLatest(types.POST_DELETING, postDeleteFlow),
		takeLatest(types.POST_REQUESTING, postRequestFlow),
		takeLatest(types.POSTS_REQUESTING, postsRequestFlow),
	]
}

export default postsWatcher
