import { Dimensions, Picker, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useEffect, useState } from 'react'

import { Button } from 'react-native-elements'
import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'

// import { setFilters } from '../../store/actions/shop'
// import { useDispatch } from 'react-redux'

let { height, width } = Dimensions.get('window')

const Filter = (props) => {
  const [selectedMenFashion, setSelectedMenFashion] = useState(' ')
  const [selectedWomenFashion, setSelectedWomenFashion] = useState(' ')
  const [selectedBusinessFashion, setSelectedBusinessFashion] = useState(' ')
  const [selectedTanningFashion, setSelectedTanningFashion] = useState(' ')
  const [selectedWorkWear, setSelectedWorkWear] = useState(' ')
  console.log('Men fashion is : !', selectedMenFashion)
  console.log('Women fashion is : !', selectedWomenFashion)
  console.log('Business fashion is : !', selectedBusinessFashion)
  console.log('Tanning fashion is : !', selectedTanningFashion)
  console.log('WorkWear  fashion is : !', selectedWorkWear)

  // const dispatch = useDispatch()
  // const saveFilter = useCallback(() => {
  //   const appliedFilter = {
  //     value: selectedValue,
  //     origin: selectedValueOrigin,
  //     destination: selectedValueDestination,
  //   }
  //   const onSelects = () => {
  //     props.navigation.navigate({ routeName: 'Filter_Packeges' })
  //   }

  //   onSelects()
  //   dispatch(setFilters(appliedFilter))
  //   // console.log(setFilters(appliedFilter))
  // }, [selectedValue, selectedValueOrigin, selectedValueDestination, dispatch])

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'open-sans-bold',
          }}
        >
          Leather Tanning
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 1.5,
          borderColor: 'grey',
          borderRadius: 4,
        }}
      >
        <Picker
          selectedValue={selectedTanningFashion}
          style={{ width: width / 1.1, height: 35 }}
          itemStyle={{
            backgroundColor: 'grey',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 17,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedTanningFashion(itemValue)
          }
        >
          <Picker.Item
            color={Color.accentColour}
            label='Select a Tanning'
            value={null}
          />
          <Picker.Item label='Aniline Leather' value='Aniline Leather' />
          <Picker.Item
            label='Buffalo Hide Leather'
            value='Buffalo Hide Leather'
          />
          <Picker.Item label='Cow Hide Leather' value='Cow Hide Leather' />
          <Picker.Item label='Goat Leather' value='Goat Leather' />
          <Picker.Item label='Sheep Leather' value='Sheep Leather' />
        </Picker>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'open-sans-bold',
          }}
        >
          Men Fashion
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 1.5,
          borderColor: 'grey',
          borderRadius: 4,
        }}
      >
        <Picker
          selectedValue={selectedMenFashion}
          style={{ width: width / 1.1, height: 35 }}
          itemStyle={{
            backgroundColor: 'grey',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 20,
            fontWeight: '700',
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedMenFashion(itemValue)
          }
        >
          <Picker.Item
            color={Color.accentColour}
            label='Men Leather Accessories'
            value={null}
          />
          <Picker.Item label='Belts' value='Belts' />
          <Picker.Item label='Bracelets' value='Bracelets' />
          <Picker.Item label='Caps' value='Caps' />
          <Picker.Item label='Card Holders' value='Card Holders' />
          <Picker.Item label='Gloves' value='Gloves' />
          <Picker.Item label='Shaving Pouches' value='Shaving Pouches' />
          <Picker.Item label='Wallet' value='Wallet' />
          <Picker.Item label='Watch Straps' value='Watch Straps' />
          <Picker.Item
            color={Color.accentColour}
            label='Men Leather Bags'
            value={null}
          />
          <Picker.Item label='Briefcases' value='Briefcases' />
          <Picker.Item label='Crossbody Bags' value='Crossbody Bags' />
          <Picker.Item label='Laptop Bags' value='Laptop Bags' />
          <Picker.Item label='Messenger Bags' value='Messenger Bags' />
          <Picker.Item label='Office Bags' value='Office Bags' />
          <Picker.Item label='Wrist/Clutch Bags' value='Wrist/Clutch Bags' />
          <Picker.Item
            color={Color.accentColour}
            label='Men Leather Outer Wear'
            value={null}
          />
          <Picker.Item label='Bicker Jackets' value='Bicker Jackets' />
          <Picker.Item label='Blazers & Reefrs' value='Blazers & Reefrs' />
          <Picker.Item label='Bomber Jackets' value='Bomber Jackets' />
          <Picker.Item label='Flight Jackets' value='Flight Jackets' />
          <Picker.Item label='Full Length Coat' value='Full Length Coat' />
          <Picker.Item
            label='Parka Duffer & Trench Coat'
            value='Parka Duffer & Trench Coat'
          />
          <Picker.Item label='Waist Coat/Glitch' value='Waist Coat/Glitch' />
        </Picker>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'open-sans-bold',
          }}
        >
          Women Fashion
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 1.5,
          borderColor: 'grey',
          borderRadius: 4,
        }}
      >
        <Picker
          selectedValue={selectedWomenFashion}
          style={{ width: width / 1.1, height: 35 }}
          itemStyle={{
            backgroundColor: 'grey',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 17,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedWomenFashion(itemValue)
          }
        >
          <Picker.Item
            color={Color.accentColour}
            label='Women Leather Accessories'
            value={null}
          />
          <Picker.Item label='Belts' value='Belts' />
          <Picker.Item label='Bracelets' value='Bracelets' />
          <Picker.Item label='Cosmetic Pouches' value='Cosmetic Pouches' />
          <Picker.Item label='Gloves' value='Gloves' />
          <Picker.Item label='Hats' value='Hats' />
          <Picker.Item label='Wallet' value='Wallet' />
          <Picker.Item label='Watch Straps' value='Watch Straps' />
          <Picker.Item label='Jewellery Cases' value='Jewellery Cases' />
          <Picker.Item label='Lipstick Cases' value='Lipstick Cases' />
          <Picker.Item
            color={Color.accentColour}
            label='Women Leather Bags'
            value={null}
          />
          <Picker.Item label='Backpacks' value='Backpacks' />
          <Picker.Item label='Crossbody Bags' value='Crossbody Bags' />
          <Picker.Item label='Hand Bags' value='Hand Bags' />
          <Picker.Item label='Organizer Bags' value='Organizer Bags' />
          <Picker.Item label='Wrist/Clutch Bags' value='Wrist/Clutch Bags' />
          <Picker.Item
            label='Women Leather Outerwear'
            value='Women Leather Outerwear'
          />
          <Picker.Item label='Bicker Jackets' value='Bicker Jackets' />
          <Picker.Item label='Bomber Jackets' value='Bomber Jackets' />
          <Picker.Item label='Flight Jackets' value='Flight Jackets' />
          <Picker.Item label='Blazers & Reefers' value='Blazers & Reefers' />
          <Picker.Item
            label='Parka Duffel & Trench Coats'
            value='Parka Duffel & Trench Coats'
          />
          <Picker.Item label='Waist Coats/Gilets' value='Waist Coats/Gilets' />
        </Picker>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'open-sans-bold',
          }}
        >
          Business Fashion
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 1.5,
          borderColor: 'grey',
          borderRadius: 4,
        }}
      >
        <Picker
          selectedValue={selectedBusinessFashion}
          style={{ width: width / 1.1, height: 35 }}
          itemStyle={{
            backgroundColor: 'grey',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 17,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedBusinessFashion(itemValue)
          }
        >
          <Picker.Item
            color={Color.accentColour}
            label='Business Leather Accessories'
            value={null}
          />
          <Picker.Item label='Desk Items' value='Desk Items' />
          <Picker.Item label='Diaries' value='Diaries' />
          <Picker.Item label='Key Holders' value='Key Holders' />
          <Picker.Item label='Notepad' value='Notepad' />
          <Picker.Item
            color={Color.accentColour}
            label='Business Leather Bags'
            value={null}
          />
          <Picker.Item label='Document Bags' value='Document Bags' />
          <Picker.Item label='Organizer Bags' value='Organizer Bags' />
          <Picker.Item
            color={Color.accentColour}
            label='Real Leather Holders / Casess'
            value={null}
          />
          <Picker.Item label='Cheque Book Casess' value='Cheque Book Casess' />
          <Picker.Item label='Document Cases' value='Document Cases' />
          <Picker.Item label='Folders' value='Folders' />
          <Picker.Item label='Gift Sets' value='Gift Sets' />
          <Picker.Item label='Writing Portfolios' value='Writing Portfolios' />
        </Picker>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'open-sans-bold',
          }}
        >
          Work Wear
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          borderWidth: 1.5,
          borderColor: 'grey',
          borderRadius: 4,
        }}
      >
        <Picker
          selectedValue={selectedWorkWear}
          style={{ width: width / 1.1, height: 35 }}
          itemStyle={{
            backgroundColor: 'grey',
            color: 'blue',
            fontFamily: 'Ebrima',
            fontSize: 17,
          }}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedWorkWear(itemValue)
          }
        >
          <Picker.Item
            color={Color.accentColour}
            label='Select Work Wear'
            value={null}
          />
          <Picker.Item label='Bib Overalls' value='Bib Overalls' />
          <Picker.Item label='Coveralls' value='Coveralls' />
          <Picker.Item
            label='High Visibility Clothing'
            value='High Visibility Clothing'
          />
          <Picker.Item label='Jackets' value='Jackets' />
          <Picker.Item label='Mechanics Gloves' value='Mechanics Gloves' />
          <Picker.Item label='Medical Uniform' value='Medical Uniform' />
          <Picker.Item label='Trouser/Pents' value='Trouser/Pents' />
          <Picker.Item label='Welding Gloves' value='Welding Gloves' />
          <Picker.Item label='Work Safety Gloves' value='Work Safety Gloves' />
          <Picker.Item label='Work Shirts' value='Work Shirts' />

          <Picker.Item label='December' value='December' />
          <Picker.Item label='All Date' value='All Date' />
        </Picker>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: width / 1.7 }}>
          <Button
            buttonStyle={{ backgroundColor: Color.accentColour }}
            title='Apply Filter'
            titleStyle={{ fontWeight: '700' }}
            //            onPress={saveFilter}
          />
        </View>
      </View>
    </View>
  )
}

Filter.navigationOptions = (navData) => {
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
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
})

export default Filter
