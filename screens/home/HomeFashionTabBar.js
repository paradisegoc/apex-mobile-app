import { Dimensions, Text, View } from 'react-native'

import Color from '../../colors/Color'
import ManFashions from './ManFashions'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SegmentedControlTab from 'react-native-segmented-control-tab'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function HomeFashionTabBar({
  ManFashion,
  ManFashionBags,
  ManFashionOuterWear,
  backColors,
  tabborderColors,
  haedingColor,
  headingBorderColor,
  tabBackColor,
  tabTextColor,
  tabOne,
  tabTwo,
  tabThree,
  tabTitle,
  navigation,
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index)
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexGrow: 1,
          paddingVertical: 20,
          elevation: 40,
          backgroundColor: backColors,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            paddingHorizontal: 15,
            textAlign: 'left',
            color: haedingColor,
          }}
        >
          {tabTitle}
        </Text>
        <View
          style={{
            borderColor: headingBorderColor,
            borderBottomWidth: 3,
            width: screenWidth / 3,
            marginLeft: 15,
          }}
        />
        <ScrollView horizontal={true}>
          <SegmentedControlTab
            values={[tabOne, tabTwo, tabThree]}
            selectedIndex={selectedIndex}
            tabStyle={{
              borderColor: tabborderColors,
              borderWidth: 1,
              backgroundColor: '#fff',
            }}
            activeTabStyle={{ backgroundColor: tabBackColor }}
            activeTabTextStyle={{ fontSize: 16, fontWeight: '700' }}
            tabTextStyle={{
              fontSize: 16,

              fontWeight: '700',
              color: tabTextColor,
            }}
            onTabPress={handleSingleIndexSelect}
            tabsContainerStyle={{
              height: 60,
              marginTop: 10,
              marginLeft: 10,
              // marginHorizontal: 10,
              width: screenWidth * 1.5,
              // marginBottom: 10,
            }}
          />
        </ScrollView>
      </View>
      {selectedIndex === 0 && (
        <View
          style={{
            backgroundColor: backColors,
            elevation: 40,
            flexGrow: 1,
            paddingVertical: 0,
            width: screenWidth,
          }}
        >
          <ManFashions
            navigation={navigation}
            textColorCateg='#121212'
            ManFashion={ManFashion}
          />
        </View>
      )}

      {selectedIndex === 1 && (
        <View
          style={{
            backgroundColor: backColors,
            elevation: 40,
            flexGrow: 1,
            paddingVertical: 0,
            width: screenWidth,
          }}
        >
          <ManFashions
            navigation={navigation}
            textColorCateg='#fff'
            ManFashion={ManFashionBags}
          />
        </View>
      )}
      {selectedIndex === 2 && (
        <View
          style={{
            backgroundColor: backColors,
            elevation: 40,
            flexGrow: 1,
            paddingVertical: 0,
            width: screenWidth,
          }}
        >
          <ManFashions
            textColorCateg='#121212'
            navigation={navigation}
            ManFashion={ManFashionOuterWear}
          />
        </View>
      )}
    </View>
  )
}

export default HomeFashionTabBar
