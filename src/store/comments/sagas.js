import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import CommentService from './services'

/* Create Comment Flow */
function* commentCreateFlow(action) {
	try {
		const {comment} = action;
		const createdComment = yield call(CommentService.createComment, comment);

		if (createdComment === 200) {
			yield put(actions.commentCreateSuccess(createdComment.data))

		} else {
			yield put(actions.commentCreateError(createdComment.message))
		}


	} catch (error) {
		yield put(actions.commentCreateError(error))
	}
}

/* Update Comment Flow */
function* commentUpdateFlow(action) {
	try {
		const {comment} = action;
		const updatedComment = yield call(CommentService.updateComment, comment);

		if (updatedComment === 200) {
			yield put(actions.commentUpdateSuccess(updatedComment.data))
		} else {
			yield put(actions.commentUpdateError(updatedComment.message))
		}


	} catch (error) {
		yield put(actions.commentUpdateError(error))
	}
}


/* Delete Comment Flow */
function* commentDeleteFlow(action) {
	try {
		const {comment} = action;
		const deletedComment = yield call(CommentService.deleteComment, comment);

		if (deletedComment === 200) {
			yield put(actions.commentDeleteSuccess(deletedComment.data))
		} else {
			yield put(actions.commentDeleteError(deletedComment.message))
		}


	} catch (error) {
		yield put(actions.commentDeleteError(error))
	}
}

/* Get Comment Flow */
function* commentRequestFlow(action) {
	try {
		const {comment} = action;
		const comments = yield call(CommentService.getComment, comment);

		yield put(actions.commentRequestSuccess(comments))
	} catch (error) {
		yield put(actions.commentRequestError(error))
	}
}

/* Get Comments Flow */
function* commentsRequestFlow(action) {
	try {
		const {filterArr} = action;
		const comments = yield call(CommentService.getComments, filterArr);

		if (comments.status === 200) {
			yield put(actions.commentsRequestSuccess(comments.data));
			yield put(actions.resetCommentsRequest())
		} else {
			yield put(actions.commentsRequestError(comments.error))
		}
	} catch (error) {
		yield put(actions.commentsRequestError(error))
	}
}

/* Watcher */
function* commentsWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.COMMENT_CREATING, commentCreateFlow),
		takeLatest(types.COMMENT_UPDATING, commentUpdateFlow),
		takeLatest(types.COMMENT_DELETING, commentDeleteFlow),
		takeLatest(types.COMMENT_REQUESTING, commentRequestFlow),
		takeLatest(types.COMMENTS_REQUESTING, commentsRequestFlow),
	]
}

export default commentsWatcher
