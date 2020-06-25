import React from 'react';
import {Feather} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Main from './pages/Main';
import Camera from './pages/Camera';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon: () => <Feather name="home" /> }} name="Main" component={Main} />
        <Tab.Screen options={{tabBarIcon: () => <Feather name="home" /> }} name="Main"  name="Camera" component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}