import { stock } from "../datosStock/stock"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 3000)
    })
} 