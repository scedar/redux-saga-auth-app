import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	/* Get all comments */
	comments: [],
	commentsTracker: {status: 'idle'},
	commentsTimestamp: undefined,

	/* Get a comment */
	comment: [],
	commentTracker: {status: 'idle'},
	commentTimestamp: undefined,

	/* Create a comment */
	newComment: [],
	newCommentTracker: {status: 'idle'},
	newCommentTimestamp: undefined,

	/* Update a comment */
	updatedComment: [],
	updatedCommentTracker: {status: 'idle'},
	updatedCommentTimestamp: undefined,

	/* Delete a comment */
	deletedComment: [],
	deletedCommentTracker: {status: 'idle'},
	deletedCommentTimestamp: undefined,
});

const reducer = function commentReducer(state = initialState, action) {
	switch (action.type) {

		/* Creating a comment */
		case types.COMMENT_CREATING:
			return state.merge({
				newCommentTracker: {status: 'processing'},
			});

		case types.COMMENT_CREATE_SUCCESS:
			return state.merge({
				newCommentTracker: {status: 'success'},
				newComment: action.newComment,
				newCommentTimestamp: action.timestamp,
			});

		case types.COMMENT_CREATE_ERROR:
			return state.merge({
				newCommentTracker: {
					status: 'error',
					errors: action.error,
				},
				newCommentTimestamp: action.timestamp,
			});

		case types.RESET_COMMENT_CREATE:
			return state.merge({
				newCommentTracker: {status: 'idle'},
			});


		/* Updating a comment */
		case types.COMMENT_UPDATING:
			return state.merge({
				updatedCommentTracker: {status: 'processing'},
			});

		case types.COMMENT_UPDATE_SUCCESS:
			return state.merge({
				updatedCommentTracker: {status: 'success'},
				updatedComment: action.updatedComment,
				updatedCommentTimestamp: action.timestamp,
			});

		case types.COMMENT_UPDATE_ERROR:
			return state.merge({
				updatedCommentTracker: {
					status: 'error',
					errors: action.error,
				},
				updatedCommentTimestamp: action.timestamp,
			});

		case types.RESET_COMMENT_UPDATE:
			return state.merge({
				updatedCommentTracker: {status: 'idle'},
			});

		/* Deleting a comment */
		case types.COMMENT_DELETING:
			return state.merge({
				deletedCommentTracker: {status: 'processing'},
			});

		case types.COMMENT_DELETE_SUCCESS:
			return state.merge({
				deletedCommentTracker: {status: 'success'},
				deletedComment: action.deletedComment,
				deletedCommentTimestamp: action.timestamp,
			});

		case types.COMMENT_DELETE_ERROR:
			return state.merge({
				deletedCommentTracker: {
					status: 'error',
					errors: action.error,
				},
				deletedCommentTimestamp: action.timestamp,
			});

		case types.RESET_COMMENT_DELETE:
			return state.merge({
				deletedCommentTracker: {status: 'idle'},
			});

		/* Get a comment */
		case types.COMMENT_REQUESTING:
			return state.merge({
				commentTracker: {status: 'processing'},
			});

		case types.COMMENT_REQUEST_SUCCESS:
			return state.merge({
				commentTracker: {status: 'success'},
				comment: action.comment,
				commentTimestamp: action.timestamp,
			});

		case types.COMMENT_REQUEST_ERROR:
			return state.merge({
				commentTracker: {
					status: 'error',
					errors: action.error,
				},
				commentTimestamp: action.timestamp,
			});

		case types.RESET_COMMENT_REQUEST:
			return state.merge({
				commentTracker: {status: 'idle'},
			});

		/* Get comments */
		case types.COMMENTS_REQUESTING:
			return state.merge({
				commentsTracker: {status: 'processing'},
			});

		case types.COMMENTS_REQUEST_SUCCESS:
			return state.merge({
				commentsTracker: {status: 'success'},
				comments: action.comments,
				commentsTimestamp: action.timestamp,
			});

		case types.COMMENTS_REQUEST_ERROR:
			return state.merge({
				commentsTracker: {
					status: 'error',
					errors: action.error,
				},
				commentsTimestamp: action.timestamp,
			});

		case types.RESET_COMMENTS_REQUEST:
			return state.merge({
				commentsTracker: {status: 'idle'},
			});

		default:
			return state
	}
};

export default reducer
