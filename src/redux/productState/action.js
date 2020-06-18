const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_TO_CART = 'REMOVE_TO_CART'

function addToCart (data) {
  return {
    type: ADD_TO_CART,
    data
  }
}

function removeToCart (data) {
  return {
    type: REMOVE_TO_CART,
    data
  }
}

export { ADD_TO_CART, REMOVE_TO_CART }

export default {
  addToCart,
  removeToCart
}
