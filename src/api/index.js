import _helpers from "../_helpers"
export default {
	fn: {
		// src/utils/fetchWithMiddleware.js

		// This function will handle the dynamic application of middleware
		getItem: async (endpoint, options = {}, hasSEO = false) => {
			const url = `https://trueandfiction.com/wp-json/wp/v2/${endpoint}`;

			// Make the fetch request with the provided URL and options
			const response = await fetch(url, options);
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

			// Make the fetch request with the provided URL and options
			const response = await fetch(url, options);
			const data = await response.json();


			// Handle the response
			if (!response.ok) {
				// console.log("Error");
				throw new Error(`Request failed with status: ${response.status}`);
			}

			// Parse the response JSON
			return data;
		},
		getItems: async (type, params = {}) => {
			const url = `https://trueandfiction.com/wp-json/wp/v2/${type}`;

			// Make the fetch request with the provided URL and options
			const response = await fetch(url, params);
			const data = await response.json();

			// _helpers.fn.addYoastMeta(data[0]);

			// Handle the response
			if (!response.ok) {
				throw new Error(`Request failed with status: ${response.status}`);
			}

			// Parse the response JSON
			return data;
		}


	}
};