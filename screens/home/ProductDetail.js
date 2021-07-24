import { Dimensions, Picker, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect, useState } from 'react'

import { Button } from 'react-native-elements'
import Color from '../../colors/Color'
import CustomCarousel from '../../components/carousel/CustomCarousel'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ProductDetail(props) {
  // const proPrice = props.navigation.getParam('proPrice')
  const products = props.navigation.getParam('productss')
  const proId = props.navigation.getParam('proId')

  const [selectedValue, setSelectedValue] = useState(' ')
  const [counter, setCounter] = useState(1)
  const [totalAmount, setTotalAmount] = useState()
  const incrementCounter = () => setCounter(counter + 1)
  let decrementCounter = () => setCounter(counter - 1)
  if (counter <= 0) {
    decrementCounter = () => setCounter(1)
  }

  const singleProduct = products.find((prod) => prod.id === proId)

  useEffect(() => {
    setTotalAmount(singleProduct.price * counter)
  }, [counter])
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            elevation: 40,
            height: screenHeight / 2.2,
            width: screenWidth,
          }}
        >
          <CustomCarousel
            imgOne={singleProduct.img}
            imgTwo={singleProduct.imgTwo}
            imgThree={singleProduct.imgThree}
            imgFour={singleProduct.imgFour}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            elevation: 40,
            padding: 30,
            marginTop: 10,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: screenWidth,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: screenWidth,
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: 'open-sans-bold' }}>
                Number of Items
              </Text>

              <View
                style={{
                  width: screenWidth / 2.5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Ionicons
                  onPress={decrementCounter}
                  name='remove'
                  size={29}
                  color='#121212'
                />
                <Text style={{ fontSize: 16 }}>{counter}</Text>
                <Ionicons
                  onPress={incrementCounter}
                  name='add'
                  size={29}
                  color='#121212'
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderWidth: 1.5,
              borderColor: 'grey',

              borderRadius: 4,
              width: screenWidth / 1.1,
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={{ width: screenWidth / 1.1, height: 30 }}
              itemStyle={{
                backgroundColor: 'grey',
                color: 'blue',
                fontFamily: 'Ebrima',
                fontSize: 17,
              }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label='Select Item Size' value='' />
              <Picker.Item label='Extra Small' value='xs' />
              <Picker.Item label='Small' value='s' />
              <Picker.Item label='Medium' value='medium' />
              <Picker.Item label='Large' value='l' />
              <Picker.Item label='Extra Large' value='xl' />
            </Picker>
          </View>
          <View
            style={{
              width: screenWidth / 1.1,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'open-sans-bold',
              }}
            >
              Price
            </Text>
            <Text
              style={{
                marginLeft: 19,

                fontSize: 16,
                fontFamily: 'open-sans-bold',
              }}
            >
              {totalAmount}
            </Text>
          </View>
          <Button
            icon={
              <Icon
                name='shopping-cart'
                size={25}
                color={Color.primaryColour}
              />
            }
            title='Add to Cart'
            containerStyle={{ marginTop: 30 }}
            type='outline'
            buttonStyle={{ borderColor: Color.primaryColour }}
            titleStyle={{ color: Color.primaryColour }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default ProductDetail

ProductDetail.navigationOptions = (navData) => {
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
