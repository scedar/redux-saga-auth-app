import globalVariables from "../../util/global";
import urlUtil from "../../util/buildURLFilterQuery";

export default class PhotosService {

	static getPhotos(reqParams) {
		const url = `/photos`;
		const method = "GET";
		let config = {
			headers: {
				"Content-Type": "photo/json",
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

	static getPhoto(reqParams) {
		const url = `/photos/${reqParams.photo.id}`;
		const method = "GET";

		let config = {
			headers: {
				"Content-Type": "photo/json",
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


	static createPhoto(reqParams) {
		const url = `/photos/`;
		const method = "PUT";
		let config = {
			headers: {
				"Content-Type": "photo/json",
				Accept: "application/json",
			},
			data: reqParams.photo,
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

	static updatePhoto(reqParams) {
		const url = `/photos/${reqParams.photo.id}`;
		const method = "PATCH";
		let config = {
			headers: {
				"Content-Type": "photo/json",
				Accept: "application/json",
			},
			data: reqParams.photo,
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

	static deletePhoto(reqParams) {
		const url = `/photos/${reqParams.photo.id}`;
		const method = "DELETE";
		let config = {
			headers: {
				"Content-Type": "photo/json",
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
