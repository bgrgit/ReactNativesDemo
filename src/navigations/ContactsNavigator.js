import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contacts from '../screens/Contacts';
import {CONTACTS} from '../constants/routeName';

const ContactsNavigator = () => {
  const ContactsStack = createStackNavigator();

  return (
    <ContactsStack.Navigator initialRouteName={CONTACTS}>
      <ContactsStack.Screen
        name={CONTACTS}
        component={Contacts}
        options={{headerShown: false}}></ContactsStack.Screen>
    </ContactsStack.Navigator>
  );
};

export default ContactsNavigator;
