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
        style={styles.headerImage}
      />
      <View style={styles.box}>
        <Text style={styles.title}>TripWiz</Text>
        <Text style={styles.text}>
          Discover your next adventure effortlessly with our AI travel planner.
          Get smart recommendations and seamless itineraries tailored to you.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Image
          source={require("./../assets/Images/plane.png")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 480,
    resizeMode: "fill",
  },
  box: {
    flex: 1,
    width: "100%",
    marginTop: -33,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
    backgroundColor: "#000",
    width: 300,
    height: 60,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Medium",
  },
  image: {
    height: 200,
    width: 300,
    marginTop: -40,
    resizeMode: "contain",
    opacity: 0.65,
    transform: [{ rotate: "-15deg" }],
    alignSelf: "flex-start",
    marginLeft: -70,
  },
});
