import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Landing from "../screens/Landing";
import home from "../screens/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Stacknavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Home" component={home} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
