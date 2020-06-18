import { ACTION_1, INCREMENT_COUNTER, DECREMENT_COUNTER } from './action'

export const initialState = {
  counter: 10
}

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_1:
      return { ...state, ...action.data }
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + action.data
      }
    case DECREMENT_COUNTER:
      return {
        counter: state.counter - action.data
      }
    default:
      return state
  }
}

export default appStateReducer
