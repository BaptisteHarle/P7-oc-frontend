import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Login, Signup, Wall } from '../screens';

const { Navigator, Screen } = createStackNavigator();

function AppNavigator() {
  return (
    <Navigator
      initialRouteName="EntryPoint"
    >
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Wall"
        component={Wall}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

export default AppNavigator;
