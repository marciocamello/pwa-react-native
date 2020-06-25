import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

import Main from './pages/Main';
import Camera from './pages/Camera';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}