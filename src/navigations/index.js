import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import {LOGIN, REGISTER} from '../constants/routeName';
import Register from '../screens/Register';
import UserInactivity from 'react-native-user-inactivity';

const AppNavContainer = () => {
  const isLoggedIn = true;
  const AuthStack = createStackNavigator();

  function BottomTab() {
    return <BottomTabNavigator />;
  }
  function navigationHome() {
    return (
      <UserInactivity
      timeForInactivity={5000}
      onAction={isActive => {
        console.log('====>>>>>' + isActive);
      }}>
      <AuthStack.Navigator initialRouteName={'BottomNav'}>
       
          <AuthStack.Screen
            name={'BottomNav'}
            component={BottomTab}
            options={{headerShown: false}}></AuthStack.Screen>

          <AuthStack.Group screenOptions={{presentation: 'modal'}}>
            <AuthStack.Screen
              name={REGISTER}
              component={Register}
              options={{headerShown: false}}></AuthStack.Screen>
          </AuthStack.Group>
      </AuthStack.Navigator>
      </UserInactivity>

    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? navigationHome() : <AuthNavigator />}
      {/* <AuthNavigator/>
          <HomeNavigator/>
          <DrawerNavigator/> */}
    </NavigationContainer>
  );
};

export default AppNavContainer;
