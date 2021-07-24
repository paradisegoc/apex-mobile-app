import {
  BusinessFashion,
  BusinessFashionBags,
  BusinessFashionOuterWear,
} from '../../data/businessFashionGridData.js'
import { Dimensions, LogBox, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {
  ManFashion,
  ManFashionBags,
  ManFashionOuterWear,
} from '../../data/fashionGridData.js'
import {
  WomenFashion,
  WomenFashionBags,
  WomenFashionOuterWear,
} from '../../data/womenFashionGridData.js'

import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import HomeFashionTabBar from './HomeFashionTabBar'
import ManFashions from './ManFashions'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { leatherTanning } from '../../data/leatherTanning'
import { workWear } from '../../data/workWear'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function Home(props) {
  const { navigation } = props
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ])
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <View style={{ flex: 1, marginTop: 10 }}>
            <HomeFashionTabBar
              tabOne='Leather Accessoties'
              tabTwo='Leather Bags'
              tabThree='Leather OuterWear'
              tabTitle='Man Fashion Categories'
              ManFashion={ManFashion}
              ManFashionBags={ManFashionBags}
              ManFashionOuterWear={ManFashionOuterWear}
              navigation={navigation}
              headingColor='#121212'
              headingBorderColor={Color.primaryColour}
              tabBackColor={Color.primaryColour}
              tabTextColor={Color.primaryColour}
              backColors='#fff'
              tabborderColors={Color.primaryColour}
            />
          </View>

          <View style={{ flex: 1, marginVertical: 10 }}>
            <HomeFashionTabBar
              tabOne='Leather Accessoties'
              tabTwo='Leather Bags'
              tabThree='Leather OuterWear'
              tabTitle='Woman Fashion Categories'
              ManFashion={WomenFashion}
              ManFashionBags={WomenFashionBags}
              ManFashionOuterWear={WomenFashionOuterWear}
              navigation={navigation}
              haedingColor='#fff'
              headingBorderColor='#fff'
              tabBackColor={Color.accentColour}
              tabTextColor={Color.primaryColour}
              backColors={Color.primaryColour}
              tabborderColors={Color.accentColour}
            />
          </View>
          <View style={{ flex: 1 }}>
            <HomeFashionTabBar
              tabOne='Leather Accessoties'
              tabTwo='Leather Bags'
              tabThree='Leather Holders/Cases'
              tabTitle='Business Fashion Categories'
              ManFashion={BusinessFashion}
              ManFashionBags={BusinessFashionBags}
              ManFashionOuterWear={BusinessFashionOuterWear}
              navigation={navigation}
              headingColor='#121212'
              headingBorderColor={Color.primaryColour}
              tabBackColor={Color.primaryColour}
              tabTextColor={Color.primaryColour}
              backColors='#fff'
              tabborderColors={Color.primaryColour}
            />
          </View>

          <View style={{ flex: 1, marginTop: 10 }}>
            <View
              style={{
                backgroundColor: Color.primaryColour,
                elevation: 40,
                flexGrow: 1,
                paddingVertical: 0,
                width: screenWidth,
              }}
            >
              <View style={{ paddingVertical: 20 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    paddingHorizontal: 15,
                    textAlign: 'left',

                    color: '#fff',
                  }}
                >
                  Work Wear
                </Text>
                <View
                  style={{
                    borderColor: '#fff',
                    borderBottomWidth: 3,
                    width: screenWidth / 5.5,
                    marginLeft: 15,
                  }}
                />
              </View>
              <ManFashions
                navigation={navigation}
                textColorCateg='#fff'
                ManFashion={workWear}
              />
            </View>
          </View>

          <View style={{ flex: 1, marginTop: 10 }}>
            <View
              style={{
                backgroundColor: '#fff',
                elevation: 40,
                flexGrow: 1,
                paddingVertical: 0,
                width: screenWidth,
              }}
            >
              <View style={{ paddingVertical: 20 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    paddingHorizontal: 15,
                    textAlign: 'left',

                    color: '#121212',
                  }}
                >
                  Leather Tanning
                </Text>
                <View
                  style={{
                    borderColor: Color.primaryColour,
                    borderBottomWidth: 3,
                    width: screenWidth / 3,
                    marginLeft: 15,
                  }}
                />
              </View>
              <ManFashions
                navigation={navigation}
                textColorCateg='#fff'
                ManFashion={leatherTanning}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
Home.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName='filter-sharp'
          onPress={() => {
            navData.navigation.navigate('filter_Screen')
          }}
        />
      </HeaderButtons>
    ),
  }
}
