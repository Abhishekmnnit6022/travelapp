import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
 import Tabnavigation from '../navigation/Tabnavigation';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './../config/firbaseconfig';

// Remove user data from AsyncStorage
const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('@user_data');
  } catch (e) {
    console.error('Failed to remove user data', e);
  }
};


export default function Home() {
  const navigation=useNavigation();
  const [user, setUser] = useState(null);


  
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_data');
        setUser(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        console.error('Failed to load user data', e);
      }
    };
    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await removeUserData();
      setUser(null);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout failed', error);
      ToastAndroid.show("Logout failed", ToastAndroid.LONG);
    }
  };

  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text>home</Text>
      <TouchableOpacity onPress={handleLogout} >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}