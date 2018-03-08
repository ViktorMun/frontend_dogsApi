import request from 'superagent'

const baseUrl = 'http://localhost:4001'


export const FETCHED_RANDOM_DOG = 'FETCHED_RANDOM_DOG'
export const FETCHED_GETALL_DOG = 'FETCHED_GETALL_DOGS'
export const FETCHED_ADD_BREED = 'FETCHED_ADD_BREEDS'

export const fetchRandomDog = () => (dispatch) => {
  request
    .get(`${baseUrl}/random/`)
    .then(response => dispatch({
      type: FETCHED_RANDOM_DOG,
      payload: response.body
    }))
    .catch(err => alert(err))
}

//top10
export const fetchGetAllDog = () => (dispatch) => {
 request
   .get(`${dogUrl}/dogs`)
   .then(response => dispatch({
     type: FETCHED_GETALL_DOG,
     payload: response.body
   }))
.catch(err => alert(err))
}

//adddogs
export const fetchAddBreed = (breed) => (dispatch) => {
 request
   .post(`${dogUrl}/addbreed`)
   .send(breed)
   .then(response => dispatch({
     type: FETCHED_ADD_BREED,
     payload: response.body
   }))
   .catch(err => alert(err))
}
