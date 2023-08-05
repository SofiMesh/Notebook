import tokenService from "./tokenService";
const BASE_URL = '/api/notes/';


//requesting to create Note
export function create(data) {
    return fetch(BASE_URL, {
        method: "POST",
        body: data,
        headers: {
            Authorization: "Bearer " + tokenService.getToken() 

        }
	}).then(responseFromTheServer => {
        if(responseFromTheServer.ok) return responseFromTheServer.json() 
		throw new Error('Something went wrong in create Note'); 
    })
    }
    export function getAll(){
        return fetch(BASE_URL, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokenService.getToken() 
            }
        }).then(responseFromTheServer => {
            if(responseFromTheServer.ok) return responseFromTheServer.json() 
            throw new Error('Something went wrong in getAll notes, check the terminal!');

        })
    }
