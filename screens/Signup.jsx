import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../config/firbaseconfig";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";


const saveUserData = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user_data', jsonValue);
  } catch (e) {
    console.error('Failed to save user data', e);
  }
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailfocused, setEmailfocused] = useState(false);
  const [passwordfocused, setPasswordfocused] = useState(false);
  const [fullname, setName] = useState('');


  useEffect(() => {
    const checkUserSession = async () => {
      const storedUser = await loadUserData();
      if (storedUser) {
        setUser(storedUser);
        navigation.navigate('Home');
      }
    };
    checkUserSession();
  }, []);

  const Oncreateuser =async () => { 
    if (!email || !password || !fullname) {
      ToastAndroid.show("Please enter all details", ToastAndroid.SHORT);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserData(user);
      ToastAndroid.show("Signup successful", ToastAndroid.LONG);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Signup failed', error);
      ToastAndroid.show("Signup failed", ToastAndroid.LONG);
    }
  };
     

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={20}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("./../assets/Images/logo.png")}
              style={{ height: 200, width: 300, resizeMode: "contain" }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 30, fontFamily: "ExtraBold" }}>
              Create Account
            </Text>
            <Text
              style={{ fontSize: 25, fontFamily: "SemiBold", marginTop: 15 }}
            >
              Let's Get Started
            </Text>
            <Text
              style={{
                marginTop: 20,
                fontFamily: "Regular",
                fontSize: 17,
                paddingLeft: 10,
              }}
            >
              Full Name
            </Text>
            <TextInput
              style={styles.inputbox}
              placeholder="Enter your Name"
              passwordRules={true}
             
              onChangeText={(value) => setName(value)}

            ></TextInput>

            <Text
              style={{
                marginTop: 20,
                fontFamily: "Regular",
                fontSize: 17,
                paddingLeft: 10,
              }}
            >
              Email
            </Text>
            <TextInput
              style={styles.inputbox}
              placeholder="Enter your Email"
              passwordRules={true}
              inputMode="email"
             
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            ></TextInput>

            <Text
              style={{
                marginTop: 20,
                fontFamily: "Regular",
                fontSize: 17,
                paddingLeft: 10,
              }}
            >
              Password
            </Text>
            <TextInput
              style={styles.inputbox}
              placeholder="Enter Password"
              secureTextEntry={true}
           
              onChangeText={(value) => setPassword(value)}
            ></TextInput>
          </View>

          <TouchableOpacity onPress={Oncreateuser}>
            <View
              style={{
                backgroundColor: "#000",
                padding: 15,
                borderRadius: 50,
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 20 }}>Create Account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
              Already have an account? 
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#000", fontSize: 20, fontFamily: 'Medium' }}>
                {" "}Login
              </Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 10,
    paddingLeft: 15,
    fontFamily: "Regular",
    fontSize: 17,
  },
  footer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
