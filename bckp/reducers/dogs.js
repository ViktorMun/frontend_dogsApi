import {FETCHED_RANDOM_DOG} from '../actions/randomDog'

const initialState = []

const resolveDogBreed = dogUrl => dogUrl.split('/')[5]

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case FETCHED_RANDOM_DOG:
        return state.concat({
          url: payload,
          breed: resolveDogBreed(payload)
        })
      default:
        return state
    }
  }
