import request from 'superagent'


export const minusOne = (userId) => {
  return (dispatch, getState) => {
    const { users } = getState()
    const user = users.fetch(url)
      .then(function(response) {

      }

      .catch((error) => {
        console.error('Something went wrong!', error)
      })
  }
}
