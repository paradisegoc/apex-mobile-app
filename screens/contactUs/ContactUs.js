import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Alert } from 'react-native'
import AllStyle from '../../AllStyle'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import SocialMediaIcon from '../../components/socialMediaIcon/SocialMediaIcon'
import { createContactForm } from '../../store/action/contactAction'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ContactUs = (props) => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  // const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const userEmail = useSelector((state) => state.auth.email)
  console.log('User Email is: !', userEmail)
  const submitHandler = useCallback(() => {
    if (name === '' || mobile === '' || userEmail === '' || message === '') {
      Alert.alert('Please enter all input fields')
    } else {
      dispatch(createContactForm(name, mobile, userEmail, message))
      Alert.alert('Message submitted successfully!!')
      setName('')

      setMessage('')
      setMobile('')
    }
  }, [dispatch, name, mobile, userEmail, message])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: screenHeight / 3, width: screenWidth }}>
          <Image
            source={require('../../assets/apexMobileBanners/Contact-US.jpg')}
            style={{
              height: screenHeight / 3,
              width: screenWidth,
              resizeMode: 'stretch',
            }}
          />
        </View>
        <View style={{ width: screenWidth / 1.1, flexGrow: 1 }}>
          <Text style={{ marginVertical: 8, fontFamily: 'open-sans-bold' }}>
            Name *
          </Text>
          <TextInput
            style={{
              paddingHorizontal: 2,
              paddingVertical: 5,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}
            value={name}
            onChangeText={(name) => setName(name)}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            returnKeyType='next'
          />
          <Text style={{ marginVertical: 8, fontFamily: 'open-sans-bold' }}>
            Email *
          </Text>
          <TextInput
            style={{
              paddingHorizontal: 2,
              paddingVertical: 5,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}
            value={userEmail}
            editable={false}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            returnKeyType='next'
          />
          <Text style={{ marginVertical: 8, fontFamily: 'open-sans-bold' }}>
            Official Phone *
          </Text>
          <TextInput
            style={{
              paddingHorizontal: 2,
              paddingVertical: 5,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}
            value={mobile}
            onChangeText={(phone) => setMobile(phone)}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            returnKeyType='next'
          />
          <Text style={{ marginVertical: 8, fontFamily: 'open-sans-bold' }}>
            Leave your Message *
          </Text>
          <TextInput
            style={{
              paddingHorizontal: 2,
              paddingVertical: 5,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}
            value={message}
            onChangeText={(msg) => setMessage(msg)}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            numberOfLines={5}
            returnKeyType='next'
          />
        </View>

        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 10,
            width: screenWidth / 1.1,
          }}
        >
          <Button title='Submit' color='#0f385a' onPress={submitHandler} />
        </View>

        <View
          style={{
            paddingTop: StatusBar.currentHeight * 2.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SocialMediaIcon
            facebookSocial='https://www.facebook.com/apexleather/'
            twitterSocial='https://twitter.com/ApexLeather'
            linkedInSocial='https://www.linkedin.com/company/apexleather/'
            instagramSocial='https://www.instagram.com/lbglobe/'
            websiteSocial='http://apexleather.co.uk/'
          />
        </View>
      </View>
    </ScrollView>
  )
}

ContactUs.navigationOptions = (navData) => {
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
  }
}

export default ContactUs
