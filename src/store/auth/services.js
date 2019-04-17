import globalVariables from '../../util/global'

export default class AuthService {
	static getAccessToken(filterObj) {
		const url = `/o/token`;
		const method = "POST";
		let config = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			params: filterObj
		};

		return globalVariables.makeRequest(method, url, config)
			.then(response => {
				//console.log("Here is response ", response);
				return response.data
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}

	static refreshAccessToken() {
		const url = `/o/refresh`;
		const method = "POST";

		let config = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			}
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response.data
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}


	static revokeAccessToken() {
		const url = `/o/revoke`;
		const method = "DELETE";

		let config = {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			}
		};

		return globalVariables.makeRequest(method, url, config, true)
			.then(response => {
				return response.status
			})
			.catch(error => {
				console.log(error);
				return error
			})
	}
}
