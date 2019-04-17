import * as types from './actionTypes'

/* Create a Album */
export const albumCreate = function albumCreate(album) {
	return {
		type: types.ALBUM_CREATING,
		album
	}
};

export const albumCreateSuccess = function albumCreateSuccess(newAlbum) {
	return {
		type: types.ALBUM_CREATE_SUCCESS,
		newAlbum,
	}
};

export const albumCreateError = function albumCreateError(error) {
	return {
		type: types.ALBUM_CREATE_ERROR,
		error,
	}
};

export const resetAlbumCreate = function resetAlbumCreate() {
	return {
		type: types.RESET_ALBUM_CREATE
	}
};


/* Update a Album */
export const albumUpdate = function albumUpdate(album) {
	return {
		type: types.ALBUM_UPDATING,
		album
	}
};

export const albumUpdateSuccess = function albumUpdateSuccess(newAlbum) {
	return {
		type: types.ALBUM_UPDATE_SUCCESS,
		newAlbum,
	}
};

export const albumUpdateError = function albumUpdateError(error) {
	return {
		type: types.ALBUM_UPDATE_ERROR,
		error,
	}
};

export const resetAlbumUpdate = function resetAlbumUpdate() {
	return {
		type: types.RESET_ALBUM_UPDATE
	}
};

/* Delete a Album */
export const albumDelete = function albumDelete(album) {
	return {
		type: types.ALBUM_DELETING,
		album
	}
};

export const albumDeleteSuccess = function albumDeleteSuccess(newAlbum) {
	return {
		type: types.ALBUM_DELETE_SUCCESS,
		newAlbum,
	}
};

export const albumDeleteError = function albumDeleteError(error) {
	return {
		type: types.ALBUM_DELETE_ERROR,
		error,
	}
};

export const resetAlbumDelete = function resetAlbumDelete() {
	return {
		type: types.RESET_ALBUM_DELETE
	}
};

/* Get a album */
export const albumRequest = function albumRequest(album) {
	return {
		type: types.ALBUM_REQUESTING,
		album
	}
};

export const albumRequestSuccess = function albumRequestSuccess(album) {
	return {
		type: types.ALBUM_REQUEST_SUCCESS,
		album,
	}
};

export const albumRequestError = function albumRequestError(error) {
	return {
		type: types.ALBUM_REQUEST_ERROR,
		error,
	}
};

export const resetAlbumRequest = function resetAlbumRequest() {
	return {
		type: types.RESET_ALBUM_REQUEST
	}
};

/* Get all albums */
export const albumsRequest = function albumsRequest(filterArr) {
	return {
		type: types.ALBUMS_REQUESTING,
		filterArr
	}
};

export const albumsRequestSuccess = function albumsRequestSuccess(albums) {
	return {
		type: types.ALBUMS_REQUEST_SUCCESS,
		albums,
	}
};

export const albumsRequestError = function albumsRequestError(error) {
	return {
		type: types.ALBUMS_REQUEST_ERROR,
		error,
	}
};

export const resetAlbumsRequest = function resetAlbumsRequest() {
	return {
		type: types.RESET_ALBUMS_REQUEST
	}
};
