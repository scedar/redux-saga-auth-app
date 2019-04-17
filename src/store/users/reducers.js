import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	/* Get all users */
	users: [],
	usersTracker: {status: 'idle'},
	usersTimestamp: undefined,

	/* Get a user */
	user: [],
	userTracker: {status: 'idle'},
	userTimestamp: undefined,

	/* Create a user */
	newUser: [],
	newUserTracker: {status: 'idle'},
	newUserTimestamp: undefined,

	/* Update a user */
	updatedUser: [],
	updatedUserTracker: {status: 'idle'},
	updatedUserTimestamp: undefined,

	/* Delete a user */
	deletedUser: [],
	deletedUserTracker: {status: 'idle'},
	deletedUserTimestamp: undefined,
});

const reducer = function userReducer(state = initialState, action) {
	switch (action.type) {

		/* Creating a user */
		case types.USER_CREATING:
			return state.merge({
				newUserTracker: {status: 'processing'},
			});

		case types.USER_CREATE_SUCCESS:
			return state.merge({
				newUserTracker: {status: 'success'},
				newUser: action.newUser,
				newUserTimestamp: action.timestamp,
			});

		case types.USER_CREATE_ERROR:
			return state.merge({
				newUserTracker: {
					status: 'error',
					errors: action.error,
				},
				newUserTimestamp: action.timestamp,
			});

		case types.RESET_USER_CREATE:
			return state.merge({
				newUserTracker: {status: 'idle'},
			});


		/* Updating a user */
		case types.USER_UPDATING:
			return state.merge({
				updatedUserTracker: {status: 'processing'},
			});

		case types.USER_UPDATE_SUCCESS:
			return state.merge({
				updatedUserTracker: {status: 'success'},
				updatedUser: action.updatedUser,
				updatedUserTimestamp: action.timestamp,
			});

		case types.USER_UPDATE_ERROR:
			return state.merge({
				updatedUserTracker: {
					status: 'error',
					errors: action.error,
				},
				updatedUserTimestamp: action.timestamp,
			});

		case types.RESET_USER_UPDATE:
			return state.merge({
				updatedUserTracker: {status: 'idle'},
			});

		/* Deleting a user */
		case types.USER_DELETING:
			return state.merge({
				deletedUserTracker: {status: 'processing'},
			});

		case types.USER_DELETE_SUCCESS:
			return state.merge({
				deletedUserTracker: {status: 'success'},
				deletedUser: action.deletedUser,
				deletedUserTimestamp: action.timestamp,
			});

		case types.USER_DELETE_ERROR:
			return state.merge({
				deletedUserTracker: {
					status: 'error',
					errors: action.error,
				},
				deletedUserTimestamp: action.timestamp,
			});

		case types.RESET_USER_DELETE:
			return state.merge({
				deletedUserTracker: {status: 'idle'},
			});

		/* Get a user */
		case types.USER_REQUESTING:
			return state.merge({
				userTracker: {status: 'processing'},
			});

		case types.USER_REQUEST_SUCCESS:
			return state.merge({
				userTracker: {status: 'success'},
				user: action.user,
				userTimestamp: action.timestamp,
			});

		case types.USER_REQUEST_ERROR:
			return state.merge({
				userTracker: {
					status: 'error',
					errors: action.error,
				},
				userTimestamp: action.timestamp,
			});

		case types.RESET_USER_REQUEST:
			return state.merge({
				userTracker: {status: 'idle'},
			});

		/* Get users */
		case types.USERS_REQUESTING:
			return state.merge({
				usersTracker: {status: 'processing'},
			});

		case types.USERS_REQUEST_SUCCESS:
			return state.merge({
				usersTracker: {status: 'success'},
				users: action.users,
				usersTimestamp: action.timestamp,
			});

		case types.USERS_REQUEST_ERROR:
			return state.merge({
				usersTracker: {
					status: 'error',
					errors: action.error,
				},
				usersTimestamp: action.timestamp,
			});

		case types.RESET_USERS_REQUEST:
			return state.merge({
				usersTracker: {status: 'idle'},
			});

		default:
			return state
	}
};

export default reducer
