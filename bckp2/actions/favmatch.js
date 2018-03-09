import request from 'superagent'

const dogUrl = 'http://localhost:4001'

export const FETCHED_GETALL_DOG = 'FETCHED_GETALL_DOGS'

//fav match
export const fetchGetAllDog = () => (dispatch) => { console.log('Машина')
 request
   .get(`${dogUrl}/dogs`)
   .then(response => dispatch({
     type: FETCHED_GETALL_DOG,
     payload: response.body
   }))
.catch(err => alert(err))
}
