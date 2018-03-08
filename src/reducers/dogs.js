import {FETCHED_RANDOM_DOG} from '../actions/showAllDog'

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case FETCHED_RANDOM_DOG:
        return state.concat(payload)
      default:
        return state
    }
  }
