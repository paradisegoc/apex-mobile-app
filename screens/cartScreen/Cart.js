// import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
// import { HeaderButtons, Item } from 'react-navigation-header-buttons'
// import { useDispatch, useSelector } from 'react-redux'

// import AllStyle from '../../AllStyle'
// import CartItem from '../../components/cartItem/CartItem.js'
// import Colors from '../../colors/Color'
// import HeaderButton from '../../components/headerButton/HeaderButton'
// import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
// import { removeFromCart } from '../../store/actions/cart'

// //import { Image, SafeAreaView, Text, View } from 'react-native'

// //import React from 'react';

// const Cart = (props) => {
// //   const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
// //   console.log(cartTotalAmount)
//   // const cartItems = useSelector((state) => state.cart.items)
//   // console.log(`FAQ Screen ${cartItems} `)

//   // console.log(`price${cartItems.prodPrice}`)
//   // console.log(`product${cartItems.prodTitle}`)

const cartItems = useSelector((state) => {
  const availableClass = []
  for (const key in state.classLevels.availableClass) {
    availableClass.push(
      createData(state.classLevels.availableClass[key].productTitle)
      //     productId: key,
      //     productTitle: state.classLevels.availableClass[key].productTitle,
      //     productPrice: state.classLevels.availableClass[key].productPrice,
      //     quantity: state.classLevels.availableClass[key].quantity,
      //     sum: state.classLevels.availableClass[key].sum,
      //   )
    )
    return availableClass
  }
})
// //   const dispatch = useDispatch()
// const availableClass = useSelector(
//     (state) => state.classLevels.availableClass
//   )

//   return (
//     <View style={styles.screen}>
//       <View style={styles.summary}>
//         <Text style={styles.summaryText}>
//           Total: <Text style={styles.amount}>$0</Text>
//         </Text>

//         <Button
//           color={Colors.accent}
//           title='Order Now'
//         //  disabled={cartItems.length === 0}
//         />
//       </View>
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item) => item.productId}
//         renderItem={(itemData) => (
//           <CartItem
//             quantity={itemData.item.quantity}
//             title={itemData.item.productTitle}
//             amount={itemData.item.sum}
//             onRemove={() => {
//               dispatch(removeFromCart(itemData.item.productId))
//             }}
//           />
//         )}
//       />
//     </View>
//   )
// }

// FAQ.navigationOptions = (navData) => {
//   return {
//     headerTitle: 'Selected Item',
//   }
// }
// const styles = StyleSheet.create({
//   screen: {
//     margin: 20,
//   },
//   summary: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     padding: 10,
//     shadowColor: 'black',
//     shadowOpacity: 0.26,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 5,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
//   summaryText: {
//     fontFamily: 'open-sans-bold',
//     fontSize: 18,
//   },
//   amount: {
//     color: Colors.primary,
//   },
// })

// export default Cart
