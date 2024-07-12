import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Stacknavigation from './navigation/Stacknavigation';
import TabNavigation from './navigation/Tabnavigation';


SplashScreen.preventAutoHideAsync();





export default function App() {
  const [loaded, error] = useFonts({
    SemiBold: require('./assets/fonts/Outfit-SemiBold.ttf'),
    ExtraBold: require('./assets/fonts/Outfit-ExtraBold.ttf'),
    ExtraLight: require('./assets/fonts/Outfit-ExtraLight.ttf'),
    Medium: require('./assets/fonts/Outfit-Medium.ttf'),
    Regular: require('./assets/fonts/Outfit-Regular.ttf'),
    Thin: require('./assets/fonts/Outfit-Thin.ttf')
     
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stacknavigation/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
