import {FETCHED_ALL_USERS, ADD_DOG} from '../actions/users'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_USERS:
      return action.payload

    case ADD_DOG:
  	  return [...state, action.payload]

    default:
      return state
  }
}
