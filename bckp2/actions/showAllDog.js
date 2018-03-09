import request from 'superagent'

const dogUrl = 'https://dog.ceo/api/breeds/image/random'


export const FETCHED_RANDOM_DOG = 'FETCHED_RANDOM_DOGS'

export const fetchRandomDog = () => (dispatch) => {
  request
    .get(`${dogUrl}`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_DOG,
      payload: response.body.message
    }))
    .catch(err => alert(err))
}
