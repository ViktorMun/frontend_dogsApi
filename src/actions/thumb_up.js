import request from 'superagent'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'
const baseUrl = 'http://localhost:4001'

export const LIKE = 'LIKE'

export const select_dog = (dog) => (dispatch) => {
  request
    .post(`${baseUrl}/products`)
    .send(product)
    .then(response => dispatch({
      type: ADD_PRODUCT,
      payload: response.body
    }))
}
