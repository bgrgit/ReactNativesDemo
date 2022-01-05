import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/Settings';
import {SETTINGS,REGISTER} from '../constants/routeName';
import Register from '../screens/Register';

const SettingsNavigator = () => {
  const SettingsStack = createStackNavigator();

  return (
    <SettingsStack.Navigator initialRouteName={SETTINGS}>
      <SettingsStack.Screen
        name={SETTINGS}
        component={Settings}
        options={{headerShown: false}}></SettingsStack.Screen>
       
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
