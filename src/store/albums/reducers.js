import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	/* Get all albums */
	albums: [],
	albumsTracker: {status: 'idle'},
	albumsTimestamp: undefined,

	/* Get a album */
	album: [],
	albumTracker: {status: 'idle'},
	albumTimestamp: undefined,

	/* Create a album */
	newAlbum: [],
	newAlbumTracker: {status: 'idle'},
	newAlbumTimestamp: undefined,

	/* Update a album */
	updatedAlbum: [],
	updatedAlbumTracker: {status: 'idle'},
	updatedAlbumTimestamp: undefined,

	/* Delete a album */
	deletedAlbum: [],
	deletedAlbumTracker: {status: 'idle'},
	deletedAlbumTimestamp: undefined,
});

const reducer = function albumReducer(state = initialState, action) {
	switch (action.type) {

		/* Creating a album */
		case types.ALBUM_CREATING:
			return state.merge({
				newAlbumTracker: {status: 'processing'},
			});

		case types.ALBUM_CREATE_SUCCESS:
			return state.merge({
				newAlbumTracker: {status: 'success'},
				newAlbum: action.newAlbum,
				newAlbumTimestamp: action.timestamp,
			});

		case types.ALBUM_CREATE_ERROR:
			return state.merge({
				newAlbumTracker: {
					status: 'error',
					errors: action.error,
				},
				newAlbumTimestamp: action.timestamp,
			});

		case types.RESET_ALBUM_CREATE:
			return state.merge({
				newAlbumTracker: {status: 'idle'},
			});


		/* Updating a album */
		case types.ALBUM_UPDATING:
			return state.merge({
				updatedAlbumTracker: {status: 'processing'},
			});

		case types.ALBUM_UPDATE_SUCCESS:
			return state.merge({
				updatedAlbumTracker: {status: 'success'},
				updatedAlbum: action.updatedAlbum,
				updatedAlbumTimestamp: action.timestamp,
			});

		case types.ALBUM_UPDATE_ERROR:
			return state.merge({
				updatedAlbumTracker: {
					status: 'error',
					errors: action.error,
				},
				updatedAlbumTimestamp: action.timestamp,
			});

		case types.RESET_ALBUM_UPDATE:
			return state.merge({
				updatedAlbumTracker: {status: 'idle'},
			});

		/* Deleting a album */
		case types.ALBUM_DELETING:
			return state.merge({
				deletedAlbumTracker: {status: 'processing'},
			});

		case types.ALBUM_DELETE_SUCCESS:
			return state.merge({
				deletedAlbumTracker: {status: 'success'},
				deletedAlbum: action.deletedAlbum,
				deletedAlbumTimestamp: action.timestamp,
			});

		case types.ALBUM_DELETE_ERROR:
			return state.merge({
				deletedAlbumTracker: {
					status: 'error',
					errors: action.error,
				},
				deletedAlbumTimestamp: action.timestamp,
			});

		case types.RESET_ALBUM_DELETE:
			return state.merge({
				deletedAlbumTracker: {status: 'idle'},
			});

		/* Get a album */
		case types.ALBUM_REQUESTING:
			return state.merge({
				albumTracker: {status: 'processing'},
			});

		case types.ALBUM_REQUEST_SUCCESS:
			return state.merge({
				albumTracker: {status: 'success'},
				album: action.album,
				albumTimestamp: action.timestamp,
			});

		case types.ALBUM_REQUEST_ERROR:
			return state.merge({
				albumTracker: {
					status: 'error',
					errors: action.error,
				},
				albumTimestamp: action.timestamp,
			});

		case types.RESET_ALBUM_REQUEST:
			return state.merge({
				albumTracker: {status: 'idle'},
			});

		/* Get albums */
		case types.ALBUMS_REQUESTING:
			return state.merge({
				albumsTracker: {status: 'processing'},
			});

		case types.ALBUMS_REQUEST_SUCCESS:
			return state.merge({
				albumsTracker: {status: 'success'},
				albums: action.albums,
				albumsTimestamp: action.timestamp,
			});

		case types.ALBUMS_REQUEST_ERROR:
			return state.merge({
				albumsTracker: {
					status: 'error',
					errors: action.error,
				},
				albumsTimestamp: action.timestamp,
			});

		case types.RESET_ALBUMS_REQUEST:
			return state.merge({
				albumsTracker: {status: 'idle'},
			});

		default:
			return state
	}
};

export default reducer
