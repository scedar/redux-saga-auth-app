import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import PhotoService from './services'

/* Create Photo Flow */
function* photoCreateFlow(action) {
	try {
		const {photo} = action;
		const createdPhoto = yield call(PhotoService.createPhoto, photo);

		if (createdPhoto === 200) {
			yield put(actions.photoCreateSuccess(createdPhoto.data))

		} else {
			yield put(actions.photoCreateError(createdPhoto.message))
		}


	} catch (error) {
		yield put(actions.photoCreateError(error))
	}
}

/* Update Photo Flow */
function* photoUpdateFlow(action) {
	try {
		const {photo} = action;
		const updatedPhoto = yield call(PhotoService.updatePhoto, photo);

		if (updatedPhoto === 200) {
			yield put(actions.photoUpdateSuccess(updatedPhoto.data))
		} else {
			yield put(actions.photoUpdateError(updatedPhoto.message))
		}


	} catch (error) {
		yield put(actions.photoUpdateError(error))
	}
}


/* Delete Photo Flow */
function* photoDeleteFlow(action) {
	try {
		const {photo} = action;
		const deletedPhoto = yield call(PhotoService.deletePhoto, photo);

		if (deletedPhoto === 200) {
			yield put(actions.photoDeleteSuccess(deletedPhoto.data))
		} else {
			yield put(actions.photoDeleteError(deletedPhoto.message))
		}


	} catch (error) {
		yield put(actions.photoDeleteError(error))
	}
}

/* Get Photo Flow */
function* photoRequestFlow(action) {
	try {
		const {photo} = action;
		const photos = yield call(PhotoService.getPhoto, photo);

		yield put(actions.photoRequestSuccess(photos))
	} catch (error) {
		yield put(actions.photoRequestError(error))
	}
}

/* Get Photos Flow */
function* photosRequestFlow(action) {
	try {
		const {filterArr} = action;
		const photos = yield call(PhotoService.getPhotos, filterArr);

		if (photos.status === 200) {
			yield put(actions.photosRequestSuccess(photos.data));
			yield put(actions.resetPhotosRequest())
		} else {
			yield put(actions.photosRequestError(photos.error))
		}
	} catch (error) {
		yield put(actions.photosRequestError(error))
	}
}

/* Watcher */
function* photosWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.PHOTO_CREATING, photoCreateFlow),
		takeLatest(types.PHOTO_UPDATING, photoUpdateFlow),
		takeLatest(types.PHOTO_DELETING, photoDeleteFlow),
		takeLatest(types.PHOTO_REQUESTING, photoRequestFlow),
		takeLatest(types.PHOTOS_REQUESTING, photosRequestFlow),
	]
}

export default photosWatcher
