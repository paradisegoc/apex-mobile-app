export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (selectedPackege) => {
  return { type: ADD_TO_CART, selectedPackege: selectedPackege }
}
export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId }
}
