import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'

import CartItem from '../../data/CartItem'

const initialState = {
  items: {},
  totalAmount: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedPackege = action.selectedPackege
      const prodPrice = addedPackege.price
      const prodTitle = addedPackege.type

      let updatedOrNewCartItem

      if (state.items[addedPackege.id]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedPackege.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedPackege.id].sum + prodPrice,
          console.log(state.items[addedPackege.id].sum)
        )
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
      }

      return {
        ...state,
        items: { ...state.items, [addedPackege.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      }
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid]
      const currentQty = selectedCartItem.quantity
      let updatedCartItems
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        )
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem }
      } else {
        updatedCartItems = { ...state.items }
        delete updatedCartItems[action.pid]
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      }
  }
  return state
}
