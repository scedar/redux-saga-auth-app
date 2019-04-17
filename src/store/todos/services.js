import globalVariables from "../../util/global";
import urlUtil from "../../util/buildURLFilterQuery";

export default class TodosService {

	static getTodos(reqParams) {
		const url = `/todos`;
		const method = "GET";
		let config = {
			headers: {
				"Content-Type": "todo/json",
				Accept: "application/json",
			},
			params:reqParams
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}

	static getTodo(reqParams) {
		const url = `/todos/${reqParams.todo.id}`;
		const method = "GET";

		let config = {
			headers: {
				"Content-Type": "todo/json",
				Accept: "application/json",
			},
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}


	static createTodo(reqParams) {
		const url = `/todos/`;
		const method = "PUT";
		let config = {
			headers: {
				"Content-Type": "todo/json",
				Accept: "application/json",
			},
			data: reqParams.todo,
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}

	static updateTodo(reqParams) {
		const url = `/todos/${reqParams.todo.id}`;
		const method = "PATCH";
		let config = {
			headers: {
				"Content-Type": "todo/json",
				Accept: "application/json",
			},
			data: reqParams.todo,
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}

	static deleteTodo(reqParams) {
		const url = `/todos/${reqParams.id}`;
		const method = "DELETE";
		let config = {
			headers: {
				"Content-Type": "todo/json",
				Accept: "application/json",
			},
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}
}
