import { ADD_TO_CART, REMOVE_TO_CART } from './action'

export const initialState = {
  products: [
    {
      id: 1,
      title: 'pen',
      price: 12,
      qty: 14
    },
    {
      id: 2,
      title: 'mobile',
      price: 18000,
      qty: 10
    },
    {
      id: 3,
      title: 'book',
      price: 120,
      qty: 10
    }
  ],
  cart: []
}

const productReducer = (state = initialState, action) => {
  const dummyCart = [...state.cart]
  const dummyProduct = [...state.products]
  var cartIndex
  var productIndex
  switch (action.type) {
    case ADD_TO_CART:
      cartIndex = state.cart.findIndex(item => {
        return item.id === action.data.id
      })
      productIndex = state.products.findIndex(item => {
        return item.id === action.data.id
      })
      if (cartIndex >= 0 && dummyProduct[productIndex].qty > 0) {
        if (productIndex >= 0) dummyProduct[productIndex].qty--
        dummyCart[cartIndex].cartQty++
        dummyCart[cartIndex].qty--
        return {
          ...state,
          products: [...dummyProduct],
          cart: [...dummyCart]
        }
      } else {
        if (productIndex >= 0) dummyProduct[productIndex].qty--
        return {
          ...state,
          products: [...dummyProduct],
          cart: [
            ...state.cart,
            {
              ...action.data,
              cartQty: 1
            }
          ]
        }
      }
    case REMOVE_TO_CART:
      cartIndex = state.cart.findIndex(item => {
        return item.id === action.data.id
      })
      productIndex = state.products.findIndex(item => {
        return item.id === action.data.id
      })
      if (cartIndex >= 0) {
        if (productIndex >= 0) dummyProduct[productIndex].qty++
        dummyCart[cartIndex].cartQty--
        dummyCart[cartIndex].qty++
        return {
          ...state,
          products: [...dummyProduct],
          cart: [...dummyCart]
        }
      }

    default:
      return state
  }
}

export default productReducer
