import globalVariables from "../../util/global";
import urlUtil from "../../util/buildURLFilterQuery";

export default class CommentsService {

	static getComments(reqParams) {
		const url = `/comments/${urlUtil.buildURLFilterQuery(reqParams)}`;
		const method = "GET";
		let config = {
			headers: {
				"Content-Type": "comment/json",
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

	static getComment(reqParams) {
		const url = `/comments/${reqParams.comment.id}`;
		const method = "GET";

		let config = {
			headers: {
				"Content-Type": "comment/json",
				Accept: "application/json",
			},
			params: {
				activePage: reqParams.activePage
			}
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


	static createComment(reqParams) {
		const url = `/comments/`;
		const method = "PUT";
		let config = {
			headers: {
				"Content-Type": "comment/json",
				Accept: "application/json",
			},
			data: reqParams.comment,
			params: {
				activePage: reqParams.activePage
			}
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

	static updateComment(reqParams) {
		const url = `/comments/${reqParams.comment.id}`;
		const method = "PATCH";
		let config = {
			headers: {
				"Content-Type": "comment/json",
				Accept: "application/json",
			},
			data: reqParams.comment,
			params: {
				activePage: reqParams.activePage
			}
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

	static deleteComment(reqParams) {
		const url = `/comments/${reqParams.comment.id}`;
		const method = "DELETE";
		let config = {
			headers: {
				"Content-Type": "comment/json",
				Accept: "application/json",
			},
			params: {
				activePage: reqParams.activePage
			}
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
