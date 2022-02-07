import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Profile from './Profile';
import Settingaccount from './Settingaccount';
import Profile1 from './Profile1';
import Verifyphonenumber from './Verifyphonenumber';
import Verifyphonenumber1 from './Verifyphonenumber1';
import verificationEmail from './verificationEmail';
import verificationEmail1 from './verificationEmail1';
import setupnotifications from './setupnotifications';
import evaluateApp from './evaluateApp';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settingaccount" component={Settingaccount} />
      <Stack.Screen name="setupnotifications" component={setupnotifications} />
      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="Verifyphonenumber" component={Verifyphonenumber} />
      <Stack.Screen name="Verifyphonenumber1" component={Verifyphonenumber1} />
      <Stack.Screen name="verificationEmail" component={verificationEmail} />
      <Stack.Screen name="verificationEmail1" component={verificationEmail1} />
      <Stack.Screen name="evaluateApp" component={evaluateApp} />
    </Stack.Navigator>
  );
}

const  AppContainer = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default AppContainer; 