import * as types from './actionTypes'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
	/* Get all todos */
	todos: [],
	todosTracker: {status: 'idle'},
	todosTimestamp: undefined,

	/* Get a todo */
	todo: [],
	todoTracker: {status: 'idle'},
	todoTimestamp: undefined,

	/* Create a todo */
	newTodo: [],
	newTodoTracker: {status: 'idle'},
	newTodoTimestamp: undefined,

	/* Update a todo */
	updatedTodo: [],
	updatedTodoTracker: {status: 'idle'},
	updatedTodoTimestamp: undefined,

	/* Delete a todo */
	deletedTodo: [],
	deletedTodoTracker: {status: 'idle'},
	deletedTodoTimestamp: undefined,
});

const reducer = function todoReducer(state = initialState, action) {
	switch (action.type) {

		/* Creating a todo */
		case types.TODO_CREATING:
			return state.merge({
				newTodoTracker: {status: 'processing'},
			});

		case types.TODO_CREATE_SUCCESS:
			return state.merge({
				newTodoTracker: {status: 'success'},
				newTodo: action.newTodo,
				newTodoTimestamp: action.timestamp,
			});

		case types.TODO_CREATE_ERROR:
			return state.merge({
				newTodoTracker: {
					status: 'error',
					errors: action.error,
				},
				newTodoTimestamp: action.timestamp,
			});

		case types.RESET_TODO_CREATE:
			return state.merge({
				newTodoTracker: {status: 'idle'},
			});


		/* Updating a todo */
		case types.TODO_UPDATING:
			return state.merge({
				updatedTodoTracker: {status: 'processing'},
			});

		case types.TODO_UPDATE_SUCCESS:
			return state.merge({
				updatedTodoTracker: {status: 'success'},
				updatedTodo: action.updatedTodo,
				updatedTodoTimestamp: action.timestamp,
			});

		case types.TODO_UPDATE_ERROR:
			return state.merge({
				updatedTodoTracker: {
					status: 'error',
					errors: action.error,
				},
				updatedTodoTimestamp: action.timestamp,
			});

		case types.RESET_TODO_UPDATE:
			return state.merge({
				updatedTodoTracker: {status: 'idle'},
			});

		/* Deleting a todo */
		case types.TODO_DELETING:
			return state.merge({
				deletedTodoTracker: {status: 'processing'},
			});

		case types.TODO_DELETE_SUCCESS:
			return state.merge({
				deletedTodoTracker: {status: 'success'},
				deletedTodo: action.deletedTodo,
				deletedTodoTimestamp: action.timestamp,
			});

		case types.TODO_DELETE_ERROR:
			return state.merge({
				deletedTodoTracker: {
					status: 'error',
					errors: action.error,
				},
				deletedTodoTimestamp: action.timestamp,
			});

		case types.RESET_TODO_DELETE:
			return state.merge({
				deletedTodoTracker: {status: 'idle'},
			});

		/* Get a todo */
		case types.TODO_REQUESTING:
			return state.merge({
				todoTracker: {status: 'processing'},
			});

		case types.TODO_REQUEST_SUCCESS:
			return state.merge({
				todoTracker: {status: 'success'},
				todo: action.todo,
				todoTimestamp: action.timestamp,
			});

		case types.TODO_REQUEST_ERROR:
			return state.merge({
				todoTracker: {
					status: 'error',
					errors: action.error,
				},
				todoTimestamp: action.timestamp,
			});

		case types.RESET_TODO_REQUEST:
			return state.merge({
				todoTracker: {status: 'idle'},
			});

		/* Get todos */
		case types.TODOS_REQUESTING:
			return state.merge({
				todosTracker: {status: 'processing'},
			});

		case types.TODOS_REQUEST_SUCCESS:
			return state.merge({
				todosTracker: {status: 'success'},
				todos: action.todos,
				todosTimestamp: action.timestamp,
			});

		case types.TODOS_REQUEST_ERROR:
			return state.merge({
				todosTracker: {
					status: 'error',
					errors: action.error,
				},
				todosTimestamp: action.timestamp,
			});

		case types.RESET_TODOS_REQUEST:
			return state.merge({
				todosTracker: {status: 'idle'},
			});

		default:
			return state
	}
};

export default reducer
