import { productos } from "./productos";

export const FetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
