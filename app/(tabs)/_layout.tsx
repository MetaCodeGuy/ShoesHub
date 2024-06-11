import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View ,Platform} from 'react-native';
import {Dimensions} from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const width =  Dimensions.get('window').width;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle:{
          position:'absolute',
          bottom:20, 
          borderRadius:20,
          width:'auto',
          maxWidth:300,
          left:'50%',
            transform: [{translateX: Platform.OS == "web"?"-50%":-width/4}],
          alignSelf:'center',
          backgroundColor:'black',
          marginHorizontal:10,
          padding:10,
          height:60
        },
        tabBarLabelStyle:{
          marginBottom:10,
          display:'none'
        },
        tabBarIconStyle:{
          marginBottom:10,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home'} color={focused?"#CEF207":"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Catr',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'shopping-cart' : 'shopping-cart'} color={focused?"#CEF207":"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="whishlist"
        options={{
          title: 'Whishlist',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart'} color={focused?"#CEF207":"white"} />
          ),
        }}
      />

<Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings'} color={focused?"#CEF207":"white"} />
          ),
        }}
      />
    </Tabs>
  );
}


