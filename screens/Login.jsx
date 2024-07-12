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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../config/firbaseconfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save user data to AsyncStorage
const saveUserData = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user_data', jsonValue);
  } catch (e) {
    console.error('Failed to save user data', e);
  }
};

// Load user data from AsyncStorage
const loadUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to load user data', e);
  }
};

// Remove user data from AsyncStorage
const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('@user_data');
  } catch (e) {
    console.error('Failed to remove user data', e);
  }
};

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailfocused, setEmailfocused] = useState(false);
  const [passwordfocused, setPasswordfocused] = useState(false);
  const [user, setUser] = useState(null);

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

  const onsignin = async () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter all details", ToastAndroid.LONG);
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserData(user);
      setUser(user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed', error);
      ToastAndroid.show("Login failed", ToastAndroid.LONG);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40, padding: 20 }}>
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
              Welcome Back
            </Text>
            <Text
              style={{ fontSize: 25, fontFamily: "SemiBold", marginTop: 15 }}
            >
              Let's Sign You In
            </Text>

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
              style={[
                styles.inputbox,
                { borderColor: emailfocused ? "green" : "gray" },
              ]}
              placeholder="Enter your Email"
              value={email}
              passwordRules={true}
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
              onFocus={() => setEmailfocused(true)}
              onBlur={() => setEmailfocused(false)}
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
              onChangeText={(value) => setPassword(value)}
              onFocus={() => setPasswordfocused(true)}
              onBlur={() => setPasswordfocused(false)}
              style={[
                styles.inputbox,
                { borderColor: passwordfocused ? "green" : "gray" },
              ]}
              placeholder="Enter Password"
              secureTextEntry={true}
            ></TextInput>
          </View>

          <TouchableOpacity onPress={onsignin}>
            <View
              style={{
                backgroundColor: "#000",
                padding: 15,
                borderRadius: 50,
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 20 }}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                padding: 15,
                borderRadius: 50,
                alignItems: "center",
                marginTop: 18,
                borderWidth: 1,
              }}
            >
              <Text style={{ color: "#000", fontSize: 20 }}>
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1.25,
    borderRadius: 50,
    marginTop: 10,
    paddingLeft: 15,
    fontFamily: "Regular",
    fontSize: 17,
  },
});
