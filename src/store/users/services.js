import globalVariables from "../../util/global";

export default class UsersService {

	static getUsers(reqParams) {
		const url = `/users`;
		const method = "GET";
		let config = {
			headers: {
				"Content-Type": "user/json",
				Accept: "application/json",
			},
			params: reqParams
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

	static getUser(reqParams) {
		const url = `/users/${reqParams.userId}`;
		const method = "GET";

		let config = {
			headers: {
				"Content-Type": "user/json",
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


	static createUser(reqParams) {
		const url = `/users/`;
		const method = "PUT";
		let config = {
			headers: {
				"Content-Type": "user/json",
				Accept: "application/json",
			},
			data: reqParams.user,
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

	static updateUser(reqParams) {
		const url = `/users/${reqParams.user.userId}`;
		const method = "PATCH";
		let config = {
			headers: {
				"Content-Type": "user/json",
				Accept: "application/json",
			},
			data: reqParams.user,
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

	static deleteUser(reqParams) {
		const url = `/users/${reqParams.user.userId}`;
		const method = "DELETE";
		let config = {
			headers: {
				"Content-Type": "user/json",
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
