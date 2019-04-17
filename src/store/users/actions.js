import * as types from './actionTypes'

/* Create a User */
export const userCreate = function userCreate(user) {
	return {
		type: types.USER_CREATING,
		user
	}
};

export const userCreateSuccess = function userCreateSuccess(newUser) {
	return {
		type: types.USER_CREATE_SUCCESS,
		newUser,
	}
};

export const userCreateError = function userCreateError(error) {
	return {
		type: types.USER_CREATE_ERROR,
		error,
	}
};

export const resetUserCreate = function resetUserCreate() {
	return {
		type: types.RESET_USER_CREATE
	}
};


/* Update a User */
export const userUpdate = function userUpdate(user) {
	return {
		type: types.USER_UPDATING,
		user
	}
};

export const userUpdateSuccess = function userUpdateSuccess(newUser) {
	return {
		type: types.USER_UPDATE_SUCCESS,
		newUser,
	}
};

export const userUpdateError = function userUpdateError(error) {
	return {
		type: types.USER_UPDATE_ERROR,
		error,
	}
};

export const resetUserUpdate = function resetUserUpdate() {
	return {
		type: types.RESET_USER_UPDATE
	}
};

/* Delete a User */
export const userDelete = function userDelete(user) {
	return {
		type: types.USER_DELETING,
		user
	}
};

export const userDeleteSuccess = function userDeleteSuccess(newUser) {
	return {
		type: types.USER_DELETE_SUCCESS,
		newUser,
	}
};

export const userDeleteError = function userDeleteError(error) {
	return {
		type: types.USER_DELETE_ERROR,
		error,
	}
};

export const resetUserDelete = function resetUserDelete() {
	return {
		type: types.RESET_USER_DELETE
	}
};

/* Get a user */
export const userRequest = function userRequest(user) {
	return {
		type: types.USER_REQUESTING,
		user
	}
};

export const userRequestSuccess = function userRequestSuccess(user) {
	return {
		type: types.USER_REQUEST_SUCCESS,
		user,
	}
};

export const userRequestError = function userRequestError(error) {
	return {
		type: types.USER_REQUEST_ERROR,
		error,
	}
};

export const resetUserRequest = function resetUserRequest() {
	return {
		type: types.RESET_USER_REQUEST
	}
};

/* Get all users */
export const usersRequest = function usersRequest(filterArr) {
	return {
		type: types.USERS_REQUESTING,
		filterArr
	}
};

export const usersRequestSuccess = function usersRequestSuccess(users) {
	return {
		type: types.USERS_REQUEST_SUCCESS,
		users,
	}
};

export const usersRequestError = function usersRequestError(error) {
	return {
		type: types.USERS_REQUEST_ERROR,
		error,
	}
};

export const resetUsersRequest = function resetUsersRequest() {
	return {
		type: types.RESET_USERS_REQUEST
	}
};
