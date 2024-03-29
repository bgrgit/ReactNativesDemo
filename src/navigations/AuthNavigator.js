import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeName';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={LOGIN}
        component={Login}
        options={{headerShown: false}}></AuthStack.Screen>
      <AuthStack.Screen
        name={REGISTER}
        component={Register}
        options={{headerShown: false}}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
