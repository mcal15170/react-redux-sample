import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../../../redux/productState/action'

const outOfStock = {
  color: 'red'
}

const Product = ({
  products,
  cart,
  addToCartProduct,
  removeToCartProduct,
  history
}) => {
  const cartTotal = cart.reduce(
    (sum, { price, cartQty }) => sum + price * cartQty,
    0
  )

  return (
    <>
      <div>
        <h1>Products</h1>
        {products &&
          products.length > 0 &&
          products.map(item => (
            <div key={item.id}>
              <p>name : {item.title}</p>
              <p>RS : {item.price.toFixed(2)}</p>
              <p>
                qty :{item.qty}{' '}
                {item.qty === 0 && <span style={outOfStock}>out of stock</span>}
              </p>
              <button
                onClick={() => addToCartProduct(item)}
                disabled={item.qty === 0}
              >
                add to cart
              </button>
              <hr />
            </div>
          ))}
      </div>
      <div>
        <h1>cart ({cart.length})</h1>
        {cart &&
          cart.length > 0 &&
          cart.map(item => (
            <div key={item.id}>
              <p>name : {item.title}</p>
              <p>product qty :{item.qty}</p>
              <p>cart qty :{item.cartQty}</p>
              <p>total price :{(item.price * item.cartQty).toFixed(2)}</p>
              <button
                disabled={item.qty === 0}
                onClick={() => addToCartProduct(item)}
              >
                +
              </button>
              &nbsp;
              <button
                disabled={item.cartQty === 1}
                onClick={() => removeToCartProduct(item)}
              >
                -
              </button>
              <hr />
            </div>
          ))}
        <h1>total cart price : {cartTotal.toFixed(2)}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            history.goBack()
          }}
        >
          back to home
        </button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  console.log('product', state)

  return {
    products: state.productReducer.products,
    cart: state.productReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCartProduct: actions.addToCart,
      removeToCartProduct: actions.removeToCart
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
