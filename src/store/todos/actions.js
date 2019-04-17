import * as types from './actionTypes'

/* Create a Todo */
export const todoCreate = function todoCreate(todo) {
	return {
		type: types.TODO_CREATING,
		todo
	}
};

export const todoCreateSuccess = function todoCreateSuccess(newTodo) {
	return {
		type: types.TODO_CREATE_SUCCESS,
		newTodo,
	}
};

export const todoCreateError = function todoCreateError(error) {
	return {
		type: types.TODO_CREATE_ERROR,
		error,
	}
};

export const resetTodoCreate = function resetTodoCreate() {
	return {
		type: types.RESET_TODO_CREATE
	}
};


/* Update a Todo */
export const todoUpdate = function todoUpdate(todo) {
	return {
		type: types.TODO_UPDATING,
		todo
	}
};

export const todoUpdateSuccess = function todoUpdateSuccess(newTodo) {
	return {
		type: types.TODO_UPDATE_SUCCESS,
		newTodo,
	}
};

export const todoUpdateError = function todoUpdateError(error) {
	return {
		type: types.TODO_UPDATE_ERROR,
		error,
	}
};

export const resetTodoUpdate = function resetTodoUpdate() {
	return {
		type: types.RESET_TODO_UPDATE
	}
};

/* Delete a Todo */
export const todoDelete = function todoDelete(todo) {
	return {
		type: types.TODO_DELETING,
		todo
	}
};

export const todoDeleteSuccess = function todoDeleteSuccess(newTodo) {
	return {
		type: types.TODO_DELETE_SUCCESS,
		newTodo,
	}
};

export const todoDeleteError = function todoDeleteError(error) {
	return {
		type: types.TODO_DELETE_ERROR,
		error,
	}
};

export const resetTodoDelete = function resetTodoDelete() {
	return {
		type: types.RESET_TODO_DELETE
	}
};

/* Get a todo */
export const todoRequest = function todoRequest(todo) {
	return {
		type: types.TODO_REQUESTING,
		todo
	}
};

export const todoRequestSuccess = function todoRequestSuccess(todo) {
	return {
		type: types.TODO_REQUEST_SUCCESS,
		todo,
	}
};

export const todoRequestError = function todoRequestError(error) {
	return {
		type: types.TODO_REQUEST_ERROR,
		error,
	}
};

export const resetTodoRequest = function resetTodoRequest() {
	return {
		type: types.RESET_TODO_REQUEST
	}
};

/* Get all todos */
export const todosRequest = function todosRequest(filterArr) {
	return {
		type: types.TODOS_REQUESTING,
		filterArr
	}
};

export const todosRequestSuccess = function todosRequestSuccess(todos) {
	return {
		type: types.TODOS_REQUEST_SUCCESS,
		todos,
	}
};

export const todosRequestError = function todosRequestError(error) {
	return {
		type: types.TODOS_REQUEST_ERROR,
		error,
	}
};

export const resetTodosRequest = function resetTodosRequest() {
	return {
		type: types.RESET_TODOS_REQUEST
	}
};
