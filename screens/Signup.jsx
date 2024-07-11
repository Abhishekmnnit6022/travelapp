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
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const navigation = useNavigation();
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
              style={styles.inputbox}
              placeholder="Enter your Email"
              passwordRules={true}
              inputMode="email"
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
            ></TextInput>
          </View>

          <TouchableOpacity>
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
});
