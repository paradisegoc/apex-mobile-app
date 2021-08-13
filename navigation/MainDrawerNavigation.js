import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'

import AboutStackNavigation from './stackNavigation/AboutStackNavigation'
import AuthScreenStackNavigation from './stackNavigation/AuthStackNavigation'
import { Button } from 'react-native-elements'
import Color from '../colors/Color'
import ContactUsStackNavigation from './stackNavigation/ContactUsStackNavigation'
import ContactUserListStackNavigation from './stackNavigation/ContactUserList'
import FAQStackNavigation from './stackNavigation/FAQStackNavigation'
import HomeStackNavigation from './stackNavigation/HomeStackNavigation'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import StartupScreen from '../screens/startupScreen/StartupScreen'
import TermandConditionStackNavigation from './stackNavigation/TermandConditionStackNavigation'
import { logOut } from '../store/action/authAction'

const MainDrawerNavigator = createDrawerNavigator(
  {
    ApexLeatherMain: {
      screen: HomeStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='home' size={25} color={Color.primaryColour} />
        ),

        drawerLabel: 'Home',
      },
    },
    // Auth_Screens: {
    //   screen: AuthScreenStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => (
    //       <Ionicons name='globe' size={25} color={Color.primaryColour} />
    //     ),

    //     drawerLabel: 'SignIn',
    //   },
    // },

    // FeaturePackeges: {
    //   screen: FeaturePackegesStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => <Ionicons name='globe' size={25} color='white' />,

    //     drawerLabel: 'Feature Packeges',
    //   },
    // },
    // ChilternPackeges: {
    //   screen: ChilternPackegesStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => <Ionicons name='globe' size={25} color='white' />,

    //     drawerLabel: 'Chiltern Packeges',
    //   },
    // },
    // Chiltern_Video: {
    //   screen: ChilternStackNavigation,
    //   navigationOptions: {
    //     drawerIcon: () => <Ionicons name='videocam' size={29} color='white' />,
    //     drawerLabel: 'Chiltern Intro',
    //   },
    // },
    ContactUser_List: {
      screen: ContactUserListStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='people-circle'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'User List',
      },
    },
    About: {
      screen: AboutStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='information-circle-sharp'
            size={29}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'AboutUs',
      },
    },

    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='call-sharp' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'ContactUs',
      },
    },

    TermCondition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='reader-sharp' size={25} color={Color.primaryColour} />
        ),
        drawerLabel: 'Term&Condition',
      },
    },

    FandQ: {
      screen: FAQStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='hand-left-sharp'
            size={25}
            color={Color.primaryColour}
          />
        ),
        drawerLabel: 'FAQ',
      },
    },
  },
  {
    contentComponent: (props) => {
      const dispatch = useDispatch()
      const usertoken = useSelector((state) => state.auth.token)
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: '', horizontal: 'never' }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                borderBottomRightRadius: 200,
              }}
            >
              <View style={styles.drawerLogo}>
                <Image
                  style={{ flex: 0.6, width: '100%', resizeMode: 'contain' }}
                  source={require('../assets/randomImages/apexleatherlogo.png')}
                />
              </View>
            </View>
            <DrawerItems {...props} />
            {usertoken ? (
              <Button
                title='LogOut'
                titleStyle={{ color: '#121212' }}
                containerStyle={{ paddingVertical: 15 }}
                buttonStyle={{
                  backgroundColor: '#fbc81b',
                }}
                onPress={() => {
                  dispatch(logOut())
                  props.navigation.navigate('Auth')
                }}
                icon={<Ionicons name='log-out' size={29} color='#121212' />}
              />
            ) : (
              <Button
                title='SignIn'
                titleStyle={{ color: '#121212' }}
                containerStyle={{ paddingVertical: 15 }}
                buttonStyle={{
                  backgroundColor: '#fbc81b',
                }}
                onPress={() => {
                  props.navigation.navigate('Login_Screen')
                  // props.navigation.navigate('Auth')
                }}
                icon={<Ionicons name='log-out' size={29} color='#121212' />}
              />
            )}
          </SafeAreaView>
        </ScrollView>
      )
    },
    drawerBackgroundColor: Color.drawerColor,
    contentOptions: {
      activeTintColor: 'hsla(360, 100%, 100%, 1.0)',
      activeBackgroundColor: Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 55,
      },
      labelStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
      },
      itemStyle: {
        marginVertical: 10,
      },
    },
  }
)
const MainAppNavigation = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthScreenStackNavigation,
  appScreen: MainDrawerNavigator,
})
export default createAppContainer(MainAppNavigation)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerLogo: {
    flex: 1,
    height: 100,
    alignItems: 'flex-start',
    marginTop: 120,
    justifyContent: 'flex-start',
  },
})
