import _helpers from "../_helpers"
const requestTracker = new Map();

const sendRequest = async (url, options) => {
	if (requestTracker.has(url)) {
		console.log(`Request already in progress for: ${url}`);
		return requestTracker.get(url); // Return the existing promise
	}
	try {
		// Create and store the fetch request promise
		const requestPromise = fetch(url, options)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Request failed with status: ${response.status}`);
				}
				return response.json();
			})
			.finally(() => {
				// Remove the completed request from the tracker
				requestTracker.delete(url);
			});

		// Store the promise in the tracker
		requestTracker.set(url, requestPromise);

		// Wait for the request to complete and return the data
		return await requestPromise;
	} catch (error) {
		console.error(`Error fetching data from: ${url}`, error);
		throw error; // Rethrow the error after handling it
	}
}

export default {
	fn: {
		// This function will handle the dynamic application of middleware
		getItem: async (endpoint, params = {}, hasSEO = false) => {
			let url = `https://trueandfiction.com/wp-json/wp/v2/${endpoint}`;
			if (params && Object.keys(params).length > 0) {
				const queryString = new URLSearchParams(params).toString();
				url += `?${queryString}`;
			}
			// Make the fetch request with the provided URL and options
			const response = await fetch(url, params);
			const data = await response.json();
			if (hasSEO) _helpers.fn.addYoastMeta(data[0]);

			// Handle the response
			if (!response.ok) {
				console.log("Error");
				// throw new Error(`Request failed with status: ${response.status}`);
			}

			// Parse the response JSON
			return data[0];
		},
		getMedia: async (endpoint, options = {}) => {
			const url = `https://trueandfiction.com/wp-json/wp/v2/${endpoint}`;
			// Check if the request is already in progress
			return sendRequest(url, options).then((response) => response);
		},
		getItems: async (type, params = {}) => {
			let url = `https://trueandfiction.com/wp-json/wp/v2/${type}?`;
			if (type != "categories") {
				url += '_fields=id,date,link,title,slug,excerpt,type,featured_media,meta,categories,modified';
			}

			if (params && Object.keys(params).length > 0) {
				const queryString = new URLSearchParams(params).toString();
				url += `&${queryString}`;
			}
			return sendRequest(url, params).then((response) => response);

		},


	}
};