import request from 'superagent'

const dogUrl = 'http://localhost:4001'

export const FETCHED_GETALL_DOG = 'FETCHED_GETALL_DOGS'
export const FETCHED_GET_USERS = 'FETCHED_GET_USERS'
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

//users
export const fetchGetUsers = () => (dispatch) => { console.log('AH')
 request
   .get(`${dogUrl}/users`)
   .then(response => dispatch({
     type: FETCHED_GET_USERS,
     payload: response.body
   }))
.catch(err => alert(err))
}
