import tokenService from "./tokenService";
const BASE_URL = '/api/notes/';

export function create(data) {
    return fetch(BASE_URL, {
        method: "POST"
        // body: 
        headers: {
            Authorization: "Bearer " + tokenService.getToken() 

        }
	}).then(responseFromTheServer => {
        if(responseFromTheServer.ok) return responseFromTheServer.json() 
		throw new Error('Something went wrong in create Post'); 

    }
