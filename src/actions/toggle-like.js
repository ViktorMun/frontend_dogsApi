import request from 'superagent'

const baseUrl = 'http://localhost:4001/dogs'

export const TOGGLE_LIKE = 'TOGGLE_LIKE'


export const toggleLike = (dog) => (dispatch) => {
const dogname=dog.url.split("/")[5];
console.log(dogname)
  request
    .post(`${baseUrl}`)
    .send({breed: dogname , userId: 5})
    .then((response) => (dispatch) => {
      type: TOGGLE_LIKE
    })
}
