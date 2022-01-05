import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_CREATE,
  CONTACT_DETAIL,
  HOME_TAB,
  SETTINGS,
} from '../constants/routeName';
import Home from '../screens/HomeScreen';
import ContactsDetail from '../screens/ContactDetails';
import CreateContacts from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={HOME_TAB} >
      <HomeStack.Screen
        name={HOME_TAB}
        component={Home}
        options={{headerShown: false}}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactsDetail}
        options={{headerShown: false}}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_CREATE}
        component={CreateContacts}
        options={{headerShown: false}}></HomeStack.Screen>
      <HomeStack.Screen
        name={SETTINGS}
        component={Settings}
        options={{headerShown: false}}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
