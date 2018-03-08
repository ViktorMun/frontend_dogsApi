import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_ALL_USERS = 'FETCHED_ALL_USERS'
export const ADD_DOG = 'ADD_DOG'


export const addDog = (dog) => (dispatch) => {
  console.log('sending: ', dog)

  request
    .post(`${baseUrl}/dogs`)
    .send(dog)
    .then(response => dispatch({
      type: ADD_DOG,
      payload: response.body
    }))
}



export const fetchAllUsers = () => (dispatch) => {
   request
    .get(`${baseUrl}/users`)
    .then(response => dispatch({
      type: FETCHED_ALL_USERS,
      payload: response.body.users
    }))
    .catch(err => alert(err))
}
