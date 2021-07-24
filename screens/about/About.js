import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Image, SafeAreaView, Text, View } from 'react-native'

import AllStyle from '../../AllStyle.js'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SocialMediaIcon from '../../components/socialMediaIcon/SocialMediaIcon'

const About = (props) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={AllStyle.aboutMainClass}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('../../assets/apexMobileBanners/aboutApex.jpg')}
              style={AllStyle.aboutimage}
            />
          </View>
          <View style={{ flex: 1 }}>
            <SocialMediaIcon
              facebookSocial='https://www.facebook.com/apexleather/'
              twitterSocial='https://twitter.com/ApexLeather'
              linkedInSocial='https://www.linkedin.com/company/apexleather/'
              instagramSocial='https://www.instagram.com/lbglobe/'
              websiteSocial='http://apexleather.co.uk/'
            />
          </View>
          <View style={{}}>
            <Text style={[{ fontSize: 24 }, AllStyle.Aboutheading]}>
              About Us
            </Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Apex Leather comes with a demanding range of fashion needs. It
              meets the client’s fashion requirements at its best consisting of
              trendy accessories, shoes, and clothing. The specialty of products
              is that they are handmade by the experts of leather. A leather
              tanning facility is also provided by the company to the clients.
              Leather bags of all kinds, jackets and business fashion that
              include wallets and file cases are also available. Leather
              products for both men and women are available.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

About.navigationOptions = (navData) => {
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

export default About
