import { FlatList, View } from 'react-native'

import FashionGrid from '../../components/fashionGrid/FashiionGrid'
import React from 'react'

// import { ManFashion } from '../../data/fashionGridData'

function ManFashions({ textColorCateg, ManFashion, navigation }) {
  const renderItems = (itemData) => {
    return (
      <FashionGrid
        title={itemData.item.title}
        imgs={itemData.item.img}
        textColors={textColorCateg}
        // logo={itemData.item.logo}
        onSelect={() => {
          navigation.navigate({
            routeName: 'Product_Screen',
            params: {
              proId: itemData.item.id,
              proArr: itemData.item.product,
              outerAray: ManFashion,
            },
          })
        }}
      />
    )
  }

  return (
    <View style={{}}>
      <FlatList
        data={ManFashion}
        keyExtractor={(Item) => Item.id}
        renderItem={renderItems}
        numColumns={3}
      />
    </View>
  )
}

export default ManFashions
