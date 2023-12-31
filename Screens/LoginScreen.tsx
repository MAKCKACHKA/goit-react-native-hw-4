import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log(`email: ${email}, password: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      {/* <Pressable onPress={Keyboard.dismiss}> */}

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Text style={styles.title}>Увійти</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : undefined}
            >
              <TextInput
                value={email}
                style={[
                  styles.input,
                  emailFocused === true && styles.focusedInput,
                ]}
                placeholder="Адреса електронної пошти"
                onChangeText={setEmail}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              <View
                style={[
                  styles.passwordContainer,
                  passwordFocused === true && styles.focusedInput,
                ]}
              >
                <TextInput
                  value={password}
                  style={styles.passwordInput}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
                <Pressable
                  style={styles.showPasswordButton}
                  onPress={togglePasswordVisibility}
                >
                  <Text style={styles.showPasswordText}>
                    {showPassword ? "Приховати" : "Показати"}
                  </Text>
                </Pressable>
              </View>
              {/* <Button
                title="Увійти"
                // style={styles.registerButton}
                color={"#FF6C00"}
                onPress={handleLogin}
              /> */}
              <Pressable
                style={styles.registerButton}
                // onPress={handleLogin}
                onPress={() => {
                  handleLogin;
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.registerButtonText}>Увійти</Text>
              </Pressable>
              {/* <Pressable onPress={handleLogin}> */}
              <Text
                style={styles.RegisterLink}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту?{" "}
                <Text style={{ textDecorationLine: "underline" }}>
                  Зареєструватися
                </Text>
              </Text>
              {/* </Pressable> */}
            </KeyboardAvoidingView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    width: "100%",

    justifyContent: "flex-end",
    flexShrink: 0,
  },

  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },
  title: {
    // fontFamily: "Roboto-Medium",
    marginTop: 32,
    marginBottom: 33,

    color: "#212121",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 30,
  },
  input: {
    flexShrink: 0,
    width: 343,
    height: 50,
    padding: 10,

    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",

    // fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  passwordContainer: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,

    flexDirection: "row",
    alignItems: "center",

    width: 343,
    height: 50,
    flexShrink: 0,
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },
  passwordInput: {
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    flex: 1,
    padding: 10,
  },
  showPasswordText: {
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  showPasswordButton: {
    paddingRight: 15,
  },
  registerButton: {
    padding: 16,
    marginTop: 43,

    borderRadius: 100,
    backgroundColor: "#FF6C00",
    color: "white",
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  registerButtonText: {
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  RegisterLink: {
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
});

export default LoginScreen;
