import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import UserService from './services'

/* Create User Flow */
function* userCreateFlow(action) {
	try {
		const {user} = action;
		const createdUser = yield call(UserService.createUser, user);

		if (createdUser === 200) {
			yield put(actions.userCreateSuccess(createdUser.data))

		} else {
			yield put(actions.userCreateError(createdUser.message))
		}


	} catch (error) {
		yield put(actions.userCreateError(error))
	}
}

/* Update User Flow */
function* userUpdateFlow(action) {
	try {
		const {user} = action;
		const updatedUser = yield call(UserService.updateUser, user);

		if (updatedUser === 200) {
			yield put(actions.userUpdateSuccess(updatedUser.data))
		} else {
			yield put(actions.userUpdateError(updatedUser.message))
		}


	} catch (error) {
		yield put(actions.userUpdateError(error))
	}
}


/* Delete User Flow */
function* userDeleteFlow(action) {
	try {
		const {user} = action;
		const deletedUser = yield call(UserService.deleteUser, user);

		if (deletedUser === 200) {
			yield put(actions.userDeleteSuccess(deletedUser.data))
		} else {
			yield put(actions.userDeleteError(deletedUser.message))
		}


	} catch (error) {
		yield put(actions.userDeleteError(error))
	}
}

/* Get User Flow */
function* userRequestFlow(action) {
	try {
		const {user} = action;
		const users = yield call(UserService.getUser, user);
		if (users.status === 200) {
			yield put(actions.userRequestSuccess(users.data))
		}else{
			yield put(actions.userRequestError(users.error))
		}
	} catch (error) {
		yield put(actions.userRequestError(error))
	}
}

/* Get Users Flow */
function* usersRequestFlow(action) {
	try {
		const {filterArr} = action;
		const users = yield call(UserService.getUsers, filterArr);

		if (users.status === 200) {
			yield put(actions.usersRequestSuccess(users.data));
			yield put(actions.resetUsersRequest())
		} else {
			yield put(actions.usersRequestError(users.error))
		}
	} catch (error) {
		yield put(actions.usersRequestError(error))
	}
}

/* Watcher */
function* usersWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.USER_CREATING, userCreateFlow),
		takeLatest(types.USER_UPDATING, userUpdateFlow),
		takeLatest(types.USER_DELETING, userDeleteFlow),
		takeLatest(types.USER_REQUESTING, userRequestFlow),
		takeLatest(types.USERS_REQUESTING, usersRequestFlow),
	]
}

export default usersWatcher
