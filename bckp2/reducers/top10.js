import {FETCHED_GETALL_DOG} from '../actions/top10'

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case FETCHED_GETALL_DOG:
        return state.concat(payload)
      default:
        return state
    }
  }
