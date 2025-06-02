import { METHODS } from "./constants.js"
import { deleteProduct, getProducts, postProduct } from "./handleMethod.js"

const { 0: method, 1: endpoint, 2: title, 3: price, 4: category } = process.argv.slice(2)

const handlerMethod = {
    [METHODS.GET]: ({endpoint}) => getProducts(endpoint),
    [METHODS.POST]: ({title, category, price}) => postProduct(title, price, category),
    [METHODS.DELETE]: ({endpoint}) => deleteProduct(endpoint)
}

const { data, status, request, statusText } = await handlerMethod[method]({endpoint, title, category, price})
console.log(`🚀 ${request.method} => ${status} ~ ${statusText}:`, data)
