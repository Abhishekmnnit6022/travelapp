import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import Discover from "./../screens/Discover";
import Mytrip from "./../screens/Mytrip";
import Profile from "./../screens/Profile";
import Home from "./../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        component={Home}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#e91e63",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen
          name="Mytrip"
          component={Mytrip}
          options={{
            tabBarLabel: "My Trip",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="location-arrow" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: "Dicover",
            tabBarIcon: ({ color }) => (
              <Feather name="globe" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
