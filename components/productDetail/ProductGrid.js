import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import {
  Dimensions,
  Image,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'

import Color from '../../colors/Color'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ProductGrid({ title, imgs, price, onSelect }) {
  const [rippleColor, setRippleColor] = React.useState(randomHexColor())
  const [rippleOverflow, setRippleOverflow] = React.useState(false)

  return (
    <View>
      <Card elevation={15} style={{ marginBottom: 20 }}>
        <View
          style={{
            height: screenHeight / 3,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              resizeMode: 'contain',

              height: screenHeight / 3.5,
              width: screenWidth,
            }}
            source={imgs}
          />
        </View>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title>{title}</Title>
          </View>
        </Card.Content>
        <Card.Content>
          {/* <Ratting /> */}
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name='flash'
              size={18}
              color={Color.accentColour}
              style={{}}
            />
            <Paragraph style={{}}> {price}USD</Paragraph>
          </View>
        </Card.Content>
        <Card.Actions>
          <TouchableNativeFeedback
            onPress={() => {
              setRippleColor(randomHexColor())
              setRippleOverflow(!rippleOverflow)
              onSelect()
            }}
            background={TouchableNativeFeedback.Ripple(
              rippleColor,
              rippleOverflow
            )}
            activeOpacity={0.5}
          >
            <Button>View Detail</Button>
          </TouchableNativeFeedback>
        </Card.Actions>
      </Card>
    </View>
  )
}
const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16)
  })
}
export default ProductGrid
