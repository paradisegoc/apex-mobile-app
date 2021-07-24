import Filter from '../../screens/filter/Filter'
import Home from '../../screens/home/Home'
import { Platform } from 'react-native'
import ProductDetail from '../../screens/home/ProductDetail'
import ProductScreen from '../../screens/home/ProductScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const HomeStackNavigator = createStackNavigator(
  {
    Home_Screen: {
      screen: Home,
    },
    Product_Screen: {
      screen: ProductScreen,
    },
    product_Detail: {
      screen: ProductDetail,
    },
    filter_Screen: {
      screen: Filter,
    },
  },
  {
    defaultNavigationOptions: {
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
  }
)
const HomeStackNavigation = createAppContainer(HomeStackNavigator)
export default HomeStackNavigation
