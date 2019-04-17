import globalVariables from "../../util/global";
import urlUtil from "../../util/buildURLFilterQuery";

export default class PostsService {

	static getPosts(reqParams) {
		const url = `/posts`;
		const method = "GET";
		let config = {
			headers: {
				"Content-Type": "post/json",
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

	static getPost(reqParams) {
		const url = `/posts/${reqParams.id}`;
		const method = "GET";

		let config = {
			headers: {
				"Content-Type": "post/json",
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


	static createPost(reqParams) {
		const url = `/posts/`;
		const method = "PUT";
		let config = {
			headers: {
				"Content-Type": "post/json",
				Accept: "application/json",
			},
			data: reqParams.post,
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

	static updatePost(reqParams) {
		const url = `/posts/${reqParams.id}`;
		const method = "PATCH";
		let config = {
			headers: {
				"Content-Type": "post/json",
				Accept: "application/json",
			},
			data: reqParams.post,
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

	static deletePost(reqParams) {
		const url = `/posts/${reqParams.id}`;
		const method = "DELETE";
		let config = {
			headers: {
				"Content-Type": "post/json",
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
