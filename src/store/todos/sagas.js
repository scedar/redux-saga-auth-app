import {call, put, takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes'
import * as actions from './actions'
import TodoService from './services'

/* Create Todo Flow */
function* todoCreateFlow(action) {
	try {
		const {todo} = action;
		const createdTodo = yield call(TodoService.createTodo, todo);

		if (createdTodo === 200) {
			yield put(actions.todoCreateSuccess(createdTodo.data))

		} else {
			yield put(actions.todoCreateError(createdTodo.message))
		}


	} catch (error) {
		yield put(actions.todoCreateError(error))
	}
}

/* Update Todo Flow */
function* todoUpdateFlow(action) {
	try {
		const {todo} = action;
		const updatedTodo = yield call(TodoService.updateTodo, todo);

		if (updatedTodo === 200) {
			yield put(actions.todoUpdateSuccess(updatedTodo.data))
		} else {
			yield put(actions.todoUpdateError(updatedTodo.message))
		}


	} catch (error) {
		yield put(actions.todoUpdateError(error))
	}
}


/* Delete Todo Flow */
function* todoDeleteFlow(action) {
	try {
		const {todo} = action;
		const deletedTodo = yield call(TodoService.deleteTodo, todo);

		if (deletedTodo === 200) {
			yield put(actions.todoDeleteSuccess(deletedTodo.data))
		} else {
			yield put(actions.todoDeleteError(deletedTodo.message))
		}


	} catch (error) {
		yield put(actions.todoDeleteError(error))
	}
}

/* Get Todo Flow */
function* todoRequestFlow(action) {
	try {
		const {todo} = action;
		const todos = yield call(TodoService.getTodo, todo);

		yield put(actions.todoRequestSuccess(todos))
	} catch (error) {
		yield put(actions.todoRequestError(error))
	}
}

/* Get Todos Flow */
function* todosRequestFlow(action) {
	try {
		const {filterArr} = action;
		const todos = yield call(TodoService.getTodos, filterArr);

		if (todos.status === 200) {
			yield put(actions.todosRequestSuccess(todos.data));
			yield put(actions.resetTodosRequest())
		} else {
			yield put(actions.todosRequestError(todos.error))
		}
	} catch (error) {
		yield put(actions.todosRequestError(error))
	}
}

/* Watcher */
function* todosWatcher() {
	// each of the below RECEIVES the action from the .. action
	yield [
		takeLatest(types.TODO_CREATING, todoCreateFlow),
		takeLatest(types.TODO_UPDATING, todoUpdateFlow),
		takeLatest(types.TODO_DELETING, todoDeleteFlow),
		takeLatest(types.TODO_REQUESTING, todoRequestFlow),
		takeLatest(types.TODOS_REQUESTING, todosRequestFlow),
	]
}

export default todosWatcher
