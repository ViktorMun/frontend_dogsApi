import {FETCHED_RANDOM_DOG} from '../actions/showAllDog'
import {TOGGLE_LIKE} from '../actions/toggle-like'

const initialState = {
  url: '',
  liked: false
}

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case FETCHED_RANDOM_DOG:
        return Object.assign({}, state, {
          url: payload
        })
      case TOGGLE_LIKE:
        return Object.assign({}, state, {
          liked: !state.liked
        })

      default:
        return state
    }
  }
