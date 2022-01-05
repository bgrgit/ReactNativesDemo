import React from 'react';
import {Image, Text, View, Alert} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigator from './HomeNavigator';
import {
  CONTACTS_NAVIGATOR,
  HOME_NAVIGATOR,
  SETTINGS_NAVIGATOR,
} from '../constants/routeName';
import Settings from '../screens/Settings';

import SettingsNavigator from './SettingsNavigator';
import ContactsNavigator from './ContactsNavigator';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const BottomTabNavigator = () => {
  const size = 25;
  return (
   
    <Tab.Navigator
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
          console.log('navname-TabPres', route.name);
          screenSwitchAlert(navigation, route);
          // Do something with the `navigation` object
          // navigation.navigate('AnotherPlace');
        },
        state: e => {
          // Do something with the state
          console.log('state changed', e.data);

          console.log('navname', route.name);
          // Do something with the `navigation` object
          if (!navigation.canGoBack()) {
            console.log("we're on the initial screen");
          }
        },
      })}
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Fira Sans',
                  fontWeight: focused ? '800' : '400',
                  fontSize: 15,
                }}>
                {route.name.toUpperCase()}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        screenOptions={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/images/icn_settings.png')}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={SETTINGS_NAVIGATOR}
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/images/icn_settings.png')}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={CONTACTS_NAVIGATOR}
        component={ContactsNavigator}
        options={{
          headerShown: false,

          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/images/icn_contacts.png')}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
  function setTimeOut(){
    console.log("Timeout")
  }
  function screenSwitchAlert(navigation, route) {
    Alert.alert('Warning', 'Do you want to change the tab', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate(route.name)},
    ]);
  }
};

export default BottomTabNavigator;
