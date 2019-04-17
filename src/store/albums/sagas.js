import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import AlbumService from './services'

/* Create Album Flow */
function* albumCreateFlow(action) {
	try {
		const {album} = action;
		const createdAlbum = yield call(AlbumService.createAlbum, album);

		if (createdAlbum === 200) {
			yield put(actions.albumCreateSuccess(createdAlbum.data))

		} else {
			yield put(actions.albumCreateError(createdAlbum.message))
		}


	} catch (error) {
		yield put(actions.albumCreateError(error))
	}
}

/* Update Album Flow */
function* albumUpdateFlow(action) {
	try {
		const {album} = action;
		const updatedAlbum = yield call(AlbumService.updateAlbum, album);

		if (updatedAlbum === 200) {
			yield put(actions.albumUpdateSuccess(updatedAlbum.data))
		} else {
			yield put(actions.albumUpdateError(updatedAlbum.message))
		}


	} catch (error) {
		yield put(actions.albumUpdateError(error))
	}
}


/* Delete Album Flow */
function* albumDeleteFlow(action) {
	try {
		const {album} = action;
		const deletedAlbum = yield call(AlbumService.deleteAlbum, album);

		if (deletedAlbum === 200) {
			yield put(actions.albumDeleteSuccess(deletedAlbum.data))
		} else {
			yield put(actions.albumDeleteError(deletedAlbum.message))
		}


	} catch (error) {
		yield put(actions.albumDeleteError(error))
	}
}

/* Get Album Flow */
function* albumRequestFlow(action) {
	try {
		const {album} = action;
		const albums = yield call(AlbumService.getAlbum, album);

		yield put(actions.albumRequestSuccess(albums))
	} catch (error) {
		yield put(actions.albumRequestError(error))
	}
}

/* Get Albums Flow */
function* albumsRequestFlow(action) {
	try {
		const {filterArr} = action;
		const albums = yield call(AlbumService.getAlbums, filterArr);

		if (albums.status === 200) {
			yield put(actions.albumsRequestSuccess(albums.data));
			yield put(actions.resetAlbumsRequest())
		} else {
			yield put(actions.albumsRequestError(albums.error))
		}
	} catch (error) {
		yield put(actions.albumsRequestError(error))
	}
}

/* Watcher */
function* albumsWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.ALBUM_CREATING, albumCreateFlow),
		takeLatest(types.ALBUM_UPDATING, albumUpdateFlow),
		takeLatest(types.ALBUM_DELETING, albumDeleteFlow),
		takeLatest(types.ALBUM_REQUESTING, albumRequestFlow),
		takeLatest(types.ALBUMS_REQUESTING, albumsRequestFlow),
	]
}

export default albumsWatcher
