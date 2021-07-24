import { FlatList, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import ProductGrid from '../../components/productDetail/ProductGrid'
import React from 'react'

function ProductScreen(props) {
  const prid = props.navigation.getParam('proId')
  const proArray = props.navigation.getParam('proArr')

  const proOuterArray = props.navigation.getParam('outerAray')
  const products = proOuterArray.find((prod) => prod.id === prid)
  const productss = products.product
  //   const productsArray = proArray.filter((pro) => pro.id === prid)
  console.log('Array is :', productss)
  //console.log('Array is :', proArray)

  const renderItems = (itemData) => {
    return (
      <ProductGrid
        title={itemData.item.title}
        imgs={itemData.item.img}
        price={itemData.item.price}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'product_Detail',
            params: {
              proId: itemData.item.id,
              proTitle: itemData.item.name,
              productss: productss,
            },
          })
        }}
      />
    )
  }

  return (
    <View style={{}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productss}
        keyExtractor={(Item) => Item.id.toString()}
        renderItem={renderItems}
        // numColumns={1}
      />
    </View>
  )
}

export default ProductScreen

ProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='cart button'
          iconName='cart'
          // onPress={() => {
          //   navData.navigation.goBack()
          // }}
        />
      </HeaderButtons>
    ),
  }
}
