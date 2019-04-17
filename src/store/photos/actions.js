import * as types from './actionTypes'

/* Create a Photo */
export const photoCreate = function photoCreate(photo) {
	return {
		type: types.PHOTO_CREATING,
		photo
	}
};

export const photoCreateSuccess = function photoCreateSuccess(newPhoto) {
	return {
		type: types.PHOTO_CREATE_SUCCESS,
		newPhoto,
	}
};

export const photoCreateError = function photoCreateError(error) {
	return {
		type: types.PHOTO_CREATE_ERROR,
		error,
	}
};

export const resetPhotoCreate = function resetPhotoCreate() {
	return {
		type: types.RESET_PHOTO_CREATE
	}
};


/* Update a Photo */
export const photoUpdate = function photoUpdate(photo) {
	return {
		type: types.PHOTO_UPDATING,
		photo
	}
};

export const photoUpdateSuccess = function photoUpdateSuccess(newPhoto) {
	return {
		type: types.PHOTO_UPDATE_SUCCESS,
		newPhoto,
	}
};

export const photoUpdateError = function photoUpdateError(error) {
	return {
		type: types.PHOTO_UPDATE_ERROR,
		error,
	}
};

export const resetPhotoUpdate = function resetPhotoUpdate() {
	return {
		type: types.RESET_PHOTO_UPDATE
	}
};

/* Delete a Photo */
export const photoDelete = function photoDelete(photo) {
	return {
		type: types.PHOTO_DELETING,
		photo
	}
};

export const photoDeleteSuccess = function photoDeleteSuccess(newPhoto) {
	return {
		type: types.PHOTO_DELETE_SUCCESS,
		newPhoto,
	}
};

export const photoDeleteError = function photoDeleteError(error) {
	return {
		type: types.PHOTO_DELETE_ERROR,
		error,
	}
};

export const resetPhotoDelete = function resetPhotoDelete() {
	return {
		type: types.RESET_PHOTO_DELETE
	}
};

/* Get a photo */
export const photoRequest = function photoRequest(photo) {
	return {
		type: types.PHOTO_REQUESTING,
		photo
	}
};

export const photoRequestSuccess = function photoRequestSuccess(photo) {
	return {
		type: types.PHOTO_REQUEST_SUCCESS,
		photo,
	}
};

export const photoRequestError = function photoRequestError(error) {
	return {
		type: types.PHOTO_REQUEST_ERROR,
		error,
	}
};

export const resetPhotoRequest = function resetPhotoRequest() {
	return {
		type: types.RESET_PHOTO_REQUEST
	}
};

/* Get all photos */
export const photosRequest = function photosRequest(filterArr) {
	return {
		type: types.PHOTOS_REQUESTING,
		filterArr
	}
};

export const photosRequestSuccess = function photosRequestSuccess(photos) {
	return {
		type: types.PHOTOS_REQUEST_SUCCESS,
		photos,
	}
};

export const photosRequestError = function photosRequestError(error) {
	return {
		type: types.PHOTOS_REQUEST_ERROR,
		error,
	}
};

export const resetPhotosRequest = function resetPhotosRequest() {
	return {
		type: types.RESET_PHOTOS_REQUEST
	}
};
