const ACTION_1 = 'ACTION_1'
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

function sampleAction (data) {
  return {
    type: ACTION_1,
    data
  }
}

function incrementCounter (data) {
  return {
    type: INCREMENT_COUNTER,
    data
  }
}

function decrementCounter (data) {
  return {
    type: DECREMENT_COUNTER,
    data
  }
}

export { ACTION_1, INCREMENT_COUNTER, DECREMENT_COUNTER }

export default {
  sampleAction,
  incrementCounter,
  decrementCounter
}
