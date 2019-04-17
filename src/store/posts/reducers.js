import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	/* Get all posts */
	posts: [],
	postsTracker: {status: 'idle'},
	postsTimestamp: undefined,

	/* Get a post */
	post: [],
	postTracker: {status: 'idle'},
	postTimestamp: undefined,

	/* Create a post */
	newPost: [],
	newPostTracker: {status: 'idle'},
	newPostTimestamp: undefined,

	/* Update a post */
	updatedPost: [],
	updatedPostTracker: {status: 'idle'},
	updatedPostTimestamp: undefined,

	/* Delete a post */
	deletedPost: [],
	deletedPostTracker: {status: 'idle'},
	deletedPostTimestamp: undefined,
});

	const reducer = function postReducer(state = initialState, action) {
	console.log("At reducer ",action);
	switch (action.type) {

		/* Creating a post */
		case types.POST_CREATING:
			return state.merge({
				newPostTracker: {status: 'processing'},
			});

		case types.POST_CREATE_SUCCESS:
			return state.merge({
				newPostTracker: {status: 'success'},
				newPost: action.newPost,
				newPostTimestamp: action.timestamp,
			});

		case types.POST_CREATE_ERROR:
			return state.merge({
				newPostTracker: {
					status: 'error',
					errors: action.error,
				},
				newPostTimestamp: action.timestamp,
			});

		case types.RESET_POST_CREATE:
			return state.merge({
				newPostTracker: {status: 'idle'},
			});


		/* Updating a post */
		case types.POST_UPDATING:
			return state.merge({
				updatedPostTracker: {status: 'processing'},
			});

		case types.POST_UPDATE_SUCCESS:
			return state.merge({
				updatedPostTracker: {status: 'success'},
				updatedPost: action.updatedPost,
				updatedPostTimestamp: action.timestamp,
			});

		case types.POST_UPDATE_ERROR:
			return state.merge({
				updatedPostTracker: {
					status: 'error',
					errors: action.error,
				},
				updatedPostTimestamp: action.timestamp,
			});

		case types.RESET_POST_UPDATE:
			return state.merge({
				updatedPostTracker: {status: 'idle'},
			});

		/* Deleting a post */
		case types.POST_DELETING:
			return state.merge({
				deletedPostTracker: {status: 'processing'},
			});

		case types.POST_DELETE_SUCCESS:
			return state.merge({
				deletedPostTracker: {status: 'success'},
				deletedPost: action.deletedPost,
				deletedPostTimestamp: action.timestamp,
			});

		case types.POST_DELETE_ERROR:
			return state.merge({
				deletedPostTracker: {
					status: 'error',
					errors: action.error,
				},
				deletedPostTimestamp: action.timestamp,
			});

		case types.RESET_POST_DELETE:
			return state.merge({
				deletedPostTracker: {status: 'idle'},
			});

		/* Get a post */
		case types.POST_REQUESTING:
			return state.merge({
				postTracker: {status: 'processing'},
			});

		case types.POST_REQUEST_SUCCESS:
			return state.merge({
				postTracker: {status: 'success'},
				post: action.post,
				postTimestamp: action.timestamp,
			});

		case types.POST_REQUEST_ERROR:
			return state.merge({
				postTracker: {
					status: 'error',
					errors: action.error,
				},
				postTimestamp: action.timestamp,
			});

		case types.RESET_POST_REQUEST:
			return state.merge({
				postTracker: {status: 'idle'},
			});

		/* Get posts */
		case types.POSTS_REQUESTING:
			return state.merge({
				postsTracker: {status: 'processing'},
			});

		case types.POSTS_REQUEST_SUCCESS:
			return state.merge({
				postsTracker: {status: 'success'},
				posts: action.posts,
				postsTimestamp: action.timestamp,
			});

		case types.POSTS_REQUEST_ERROR:
			return state.merge({
				postsTracker: {
					status: 'error',
					errors: action.error,
				},
				postsTimestamp: action.timestamp,
			});

		case types.RESET_POSTS_REQUEST:
			return state.merge({
				postsTracker: {status: 'idle'},
			});

		default:
			return state
	}
};

export default reducer
