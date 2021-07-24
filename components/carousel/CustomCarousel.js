import { Image, SafeAreaView, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'

import Carousel from 'react-native-snap-carousel'

const CustomCarousel = ({ imgOne, imgTwo, imgThree, imgFour }) => {
  const exampleItems = [
    {
      title: imgOne,
    },
    {
      title: imgTwo,
    },
    {
      title: imgThree,
    },
    {
      title: imgFour,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const ref = useRef(null)

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          flex: 1,
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 305,

          //marginLeft: 25,
          //marginRight: 25,
        }}
      >
        <Image
          style={{ flex: 1, width: '100%', resizeMode: 'stretch' }}
          source={item.title}
        />
        {/* <Text>{item.text}</Text> */}
      </View>
    ),
    []
  )

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout='default'
          ref={ref}
          data={exampleItems}
          sliderWidth={300}
          itemWidth={300}
          autoplay={true}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  )
}

export default CustomCarousel
