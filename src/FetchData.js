import { productos } from "./productos";

export const FetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });


export const getAPI = (url) => {
    return fetch(url) 
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const postAPI = (url, body) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
    }).then(response => response.json()) .catch(err => console.error(err));
}