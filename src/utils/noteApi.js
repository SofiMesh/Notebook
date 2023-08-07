import tokenService from "./tokenService";
const BASE_URL = '/api/notes/';


//requesting to create Note
export function create(data) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken()

    }
  }).then(responseFromTheServer => {
    if (responseFromTheServer.ok) return responseFromTheServer.json()
    throw new Error('Something went wrong in create Note');
  })
}

//
export function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(responseFromTheServer => {
    if (responseFromTheServer.ok) return responseFromTheServer.json()
    throw new Error('Something went wrong in getAll notes, check the terminal!');

  })
}

//
export function remove(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  })
    .then((responseFromTheServer) => {
      if (responseFromTheServer.ok) return responseFromTheServer.json();
      throw new Error("Something went wrong in delete Note");
    });
}