import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	/* Get all photos */
	photos: [],
	photosTracker: {status: 'idle'},
	photosTimestamp: undefined,

	/* Get a photo */
	photo: [],
	photoTracker: {status: 'idle'},
	photoTimestamp: undefined,

	/* Create a photo */
	newPhoto: [],
	newPhotoTracker: {status: 'idle'},
	newPhotoTimestamp: undefined,

	/* Update a photo */
	updatedPhoto: [],
	updatedPhotoTracker: {status: 'idle'},
	updatedPhotoTimestamp: undefined,

	/* Delete a photo */
	deletedPhoto: [],
	deletedPhotoTracker: {status: 'idle'},
	deletedPhotoTimestamp: undefined,
});

const reducer = function photoReducer(state = initialState, action) {
	switch (action.type) {

		/* Creating a photo */
		case types.PHOTO_CREATING:
			return state.merge({
				newPhotoTracker: {status: 'processing'},
			});

		case types.PHOTO_CREATE_SUCCESS:
			return state.merge({
				newPhotoTracker: {status: 'success'},
				newPhoto: action.newPhoto,
				newPhotoTimestamp: action.timestamp,
			});

		case types.PHOTO_CREATE_ERROR:
			return state.merge({
				newPhotoTracker: {
					status: 'error',
					errors: action.error,
				},
				newPhotoTimestamp: action.timestamp,
			});

		case types.RESET_PHOTO_CREATE:
			return state.merge({
				newPhotoTracker: {status: 'idle'},
			});


		/* Updating a photo */
		case types.PHOTO_UPDATING:
			return state.merge({
				updatedPhotoTracker: {status: 'processing'},
			});

		case types.PHOTO_UPDATE_SUCCESS:
			return state.merge({
				updatedPhotoTracker: {status: 'success'},
				updatedPhoto: action.updatedPhoto,
				updatedPhotoTimestamp: action.timestamp,
			});

		case types.PHOTO_UPDATE_ERROR:
			return state.merge({
				updatedPhotoTracker: {
					status: 'error',
					errors: action.error,
				},
				updatedPhotoTimestamp: action.timestamp,
			});

		case types.RESET_PHOTO_UPDATE:
			return state.merge({
				updatedPhotoTracker: {status: 'idle'},
			});

		/* Deleting a photo */
		case types.PHOTO_DELETING:
			return state.merge({
				deletedPhotoTracker: {status: 'processing'},
			});

		case types.PHOTO_DELETE_SUCCESS:
			return state.merge({
				deletedPhotoTracker: {status: 'success'},
				deletedPhoto: action.deletedPhoto,
				deletedPhotoTimestamp: action.timestamp,
			});

		case types.PHOTO_DELETE_ERROR:
			return state.merge({
				deletedPhotoTracker: {
					status: 'error',
					errors: action.error,
				},
				deletedPhotoTimestamp: action.timestamp,
			});

		case types.RESET_PHOTO_DELETE:
			return state.merge({
				deletedPhotoTracker: {status: 'idle'},
			});

		/* Get a photo */
		case types.PHOTO_REQUESTING:
			return state.merge({
				photoTracker: {status: 'processing'},
			});

		case types.PHOTO_REQUEST_SUCCESS:
			return state.merge({
				photoTracker: {status: 'success'},
				photo: action.photo,
				photoTimestamp: action.timestamp,
			});

		case types.PHOTO_REQUEST_ERROR:
			return state.merge({
				photoTracker: {
					status: 'error',
					errors: action.error,
				},
				photoTimestamp: action.timestamp,
			});

		case types.RESET_PHOTO_REQUEST:
			return state.merge({
				photoTracker: {status: 'idle'},
			});

		/* Get photos */
		case types.PHOTOS_REQUESTING:
			return state.merge({
				photosTracker: {status: 'processing'},
			});

		case types.PHOTOS_REQUEST_SUCCESS:
			return state.merge({
				photosTracker: {status: 'success'},
				photos: action.photos,
				photosTimestamp: action.timestamp,
			});

		case types.PHOTOS_REQUEST_ERROR:
			return state.merge({
				photosTracker: {
					status: 'error',
					errors: action.error,
				},
				photosTimestamp: action.timestamp,
			});

		case types.RESET_PHOTOS_REQUEST:
			return state.merge({
				photosTracker: {status: 'idle'},
			});

		default:
			return state
	}
};

export default reducer
