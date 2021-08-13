import { FlatList, View } from 'react-native'

import FashionGrid from '../../components/fashionGrid/FashiionGrid'
import React from 'react'

// import { ManFashion } from '../../data/fashionGridData'

function ManFashions({ textColorCateg, ManFashion, navigation }) {
  // useEffect(() => {
  //   axios
  //     .get(`https://apex-leather.herokuapp.com/categories/leather-tanning`)
  //     .then((res) => {
  //       const leatherAccessories = res.data

  //       setLeatherTanning([leatherAccessories])
  //     })
  // }, [])
  // console.log('Image is : ', ManFashion.products.image)
  const renderItems = (itemData) => {
    return (
      <FashionGrid
        title={itemData.item.name}
        // imgs={itemData.item.img}
        textColors={textColorCateg}
        // logo={itemData.item.logo}
        onSelect={() => {
          navigation.navigate({
            routeName: 'Product_Screen',
            params: {
              proId: itemData.item._id,
              proArr: itemData.item.products,
              //  proImg: itemData.item.products.image,
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
        keyExtractor={(Item) => Item._id}
        renderItem={renderItems}
        numColumns={3}
      />
    </View>
  )
}

export default ManFashions
