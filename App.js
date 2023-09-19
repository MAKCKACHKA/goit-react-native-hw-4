import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./Screens/LoginScreen copy";
// import LoginScreen from "./Screens/LoginScreen";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("./assets/Photo BG.jpg")}
        resizeMode="cover"
        style={styles.image}
      > */}
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
