import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home,Hm ,En, Earn, Stg, Setin} from '../../assets/Svg';
import DashBoard from '../screens/DashBoard';
import EarnScreen from '../screens/EarnScreen';
import Settings from '../screens/Settings';
const Tab = createBottomTabNavigator();




const BottomNavigation = () => {
 
  return (
    <Tab.Navigator
    styles={{height:55}}
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarShowLabel: true, 
      }}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarIcon: ({focused, color}) => (focused ? <Home/> : <Hm />),
          headerShown: false,
          headerTintColor: false,
          headerStyle: {
            backgroundColor: 'none', // Change the background color of the header
          },
        }}
      />
      <Tab.Screen
        name="EarnScreen"
        component={EarnScreen}
        options={{
          tabBarIcon: ({color, focused}) => (focused ? <Earn/> : <En/>),
          headerShown: false,
          headerStyle: {
            backgroundColor: 'blue', // Change the background color of the header
          },
          headerTintColor: 'white',
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, focused}) => (focused ? <Setin/>: <Stg/>),
          headerShown: false,
       
        }}
      />
     
    </Tab.Navigator>
    
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
