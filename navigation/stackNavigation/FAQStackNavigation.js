import Color from '../../colors/Color'
import FAQ from '../../screens/faq/FAQ'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const FAQStackNavigator = createStackNavigator({
  FAQ_Us: {
    screen: FAQ,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#fff' : '#fff',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  },
})
const FAQStackNavigation = createAppContainer(FAQStackNavigator)
export default FAQStackNavigation
