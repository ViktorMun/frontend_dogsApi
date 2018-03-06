import * as request from 'superagent'

const baseUrl = 'https://dog.ceo/dog-api/breeds-image-random.php'
console.log(baseUrl)

export const FETCHED_DETAILED_PRODUCT = 'FETCHED_DETAILED_PRODUCT'
export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const fetchProduct = (productId) => (dispatch) => {
  request
    .get(`${baseUrl}/products/${productId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_PRODUCT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllProducts = () => (dispatch) => {
  request
    .get(`${baseUrl}/products/`)
    .then(response => dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: response.body.products
    }))
    .catch(err => alert(err))
  // ... implement!
  // Hint: make sure to use json.products and not json as payload,
  // because you send back an envelope! (so response.body.products)
}

export const createProduct = (product) => (dispatch) => {
  request
    .post(`${baseUrl}/products`)
    .send(product)
    .then(response => dispatch({
      type: ADD_PRODUCT,
      payload: response.body
    }))
}

export const deleteProduct = (productId) => (dispatch) => {
  request
    .delete(`${baseUrl}/products/${productId}`)
    .then(response => dispatch({
      type: REMOVE_PRODUCT,
      payload: productId
    }))
}
