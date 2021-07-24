// import { FlatList, Text, View } from 'react-native'
// import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// import HeaderButton from '../../components/headerButton/HeaderButton'
// import React from 'react'
// import ShopGrid from '../../components/homeScreen/ServicesGrid'
// import { useSelector } from 'react-redux'

// const FilterShops = (props) => {
//   const availableShops = useSelector((state) => state.shop.filteredShops)
//   console.log(`filter screen${availableShops}`)
//   const renderSalonShops = (itemData) => {
//     return (
//       <ShopGrid
//         title={itemData.item.shopName}
//         openingTime={itemData.item.openingTime}
//         excludingDays={itemData.item.excludingDays}
//         membersType={itemData.item.membersType}
//         shopImages={itemData.item.shopImage}
//         shopLogo={itemData.item.shopLogo}
//         onSelect={() => {
//           navigations.navigate({
//             routeName: 'HomeScreen_Detail',
//             params: {
//               shopId: itemData.item.shopId,
//               shopTitle: itemData.item.shopName,
//             },
//           })
//         }}
//       />
//     )
//   }

//   if (availableShops.length === 0) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>No data Found !!</Text>
//       </View>
//     )
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={availableShops}
//         keyExtractor={(Item) => Item.shopId}
//         renderItem={renderSalonShops}
//       />
//     </View>
//   )
// }

// FilterShops.navigationOptions = (navData) => {
//   return {
//     headerTitle: 'Filtered Shops',
//     // headerLeft: () => (
//     //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
//     //     <Item
//     //       title='Menu'
//     //       iconName='ios-menu'
//     //       onPress={() => {
//     //         navData.navigation.toggleDrawer()
//     //       }}
//     //     />
//     //   </HeaderButtons>
//     // ),
//   }
// }

// export default FilterShops
