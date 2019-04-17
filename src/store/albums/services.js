import globalVariables from "../../util/global";

export default class AlbumsService {

	static getAlbums(reqParams) {
		const url = `/albums`;
		const method = "GET";
		let config = {
			headers: {
				"Content-Type": "album/json",
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

	static getAlbum(reqParams) {
		const url = `/albums/${reqParams.id}`;
		const method = "GET";

		let config = {
			headers: {
				"Content-Type": "album/json",
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


	static createAlbum(reqParams) {
		const url = `/albums/`;
		const method = "PUT";
		let config = {
			headers: {
				"Content-Type": "album/json",
				Accept: "application/json",
			},
			data: reqParams.album,
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

	static updateAlbum(reqParams) {
		const url = `/albums/${reqParams.album.id}`;
		const method = "PATCH";
		let config = {
			headers: {
				"Content-Type": "album/json",
				Accept: "application/json",
			},
			data: reqParams.album,
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

	static deleteAlbum(reqParams) {
		const url = `/albums/${reqParams.album.id}`;
		const method = "DELETE";
		let config = {
			headers: {
				"Content-Type": "album/json",
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
