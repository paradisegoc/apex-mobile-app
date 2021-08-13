export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (selectedPackege) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://apexleathermobileapp-default-rtdb.firebaseio.com/orders/ul.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNum,
          email,
          message,
        }),
      }
    )

    const resData = await response.json()
    console.log(resData)
    dispatch({
      type: CREATE_CONTACT,
      contactData: {
        id: resData.name,
        name,
        phoneNum,
        email,
        message,
      },
    })
  }
}
export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId }
}
