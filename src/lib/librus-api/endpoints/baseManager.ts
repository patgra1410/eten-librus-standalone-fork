import LibrusClient from "../index.js";

export default class BaseManager {
	client: LibrusClient;
	constructor(client: LibrusClient) {
		this.client = client;
	}
}