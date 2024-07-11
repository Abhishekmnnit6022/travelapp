import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Landing() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Image
        source={require("./../assets/Images/places.jpg")}
        style={{ width: "100%", height: 480 ,objectFit:'fill'}}
      ></Image>
      <View style={styles.box}>
        <Text style={styles.title}>TripWiz</Text>
        <Text style={styles.text}>
          Discover your next adventure effortlessly with our AI travel planner.
          Get smart recommendations and seamless itineraries tailored to you.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View style={styles.button}>
            <Text
              style={{ color: "#ffffff", fontSize: 22, alignContent: "center" }}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <Image source={require("./../assets/Images/plane.png")}
        style={styles.image}></Image>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  box: {
    height: "100%",
    width: "100%",
    marginTop: -30,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    backgroundColor: "#ffffff",
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontFamily: "ExtraBold",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontFamily: "Regular",
    textAlign: "center",
    marginTop: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "#000",
    height: 55,
    borderRadius: 99,
    width: 300,
    marginTop: "25%",
    flexDirection: "row",

    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 300,
    marginTop:-50,
    resizeMode: 'contain',
    opacity: 0.65,
    transform: [{ rotate: '-15deg' }],
    alignSelf:'flex-start',
    marginLeft: -70,
  },
});
