import axios from "axios"
import { API } from "./constants.js"

export const getProducts = async (endpoint) => {
    const [, id] = endpoint.split("/")
    if(id){
        return await axios.get(API.product + id)
    }

    return await axios.get(API.product)
}

export const postProduct = async (title, price, category) => {
    return await axios.post(API.product, { title, price, category })
}

export const deleteProduct = async (endpoint) => {
    const [, id] = endpoint.split("/")
    return await axios.delete(API.product + id)
}
