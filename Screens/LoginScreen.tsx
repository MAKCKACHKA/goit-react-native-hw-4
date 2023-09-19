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
  Alert,
  Button,
} from "react-native";

const LoginScreen = () => {
  // const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // if (email !== "" && password !== "") {
    //   console.log(`email: ${email}, password: ${password}`);
    // }
    // setEmail("");
    // setPassword("");
    Alert.alert(`email: ${email}, password: ${password}`);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setInputFocused(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setInputFocused(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.backgroundImage}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            // , { paddingTop: isInputFocused ? 180 : 323 }
          ]}
        >
          <View style={styles.wrapper}>
            <Text style={styles.title}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={email}
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onChangeText={setEmail}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  value={password}
                  style={styles.passwordInput}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.showPasswordButton}
                  onPress={togglePasswordVisibility}
                >
                  <Text style={styles.showPasswordText}>
                    {showPassword ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={handleLogin}
              >
                <Text style={styles.registerButtonText}>Увійти</Text>
              </TouchableOpacity>

              <Text style={styles.loginLink}>
                Немає акаунту? Зареєструватися
              </Text>
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

  container: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 323,
    // paddingTop: 265,
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",

    // height: 812,

    borderRadius: 10,
    flexShrink: 0,
  },
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    position: "relative",

    width: "100%",

    height: 549,
    flexShrink: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginTop: 32,
    fontWeight: "bold",

    marginBottom: 33,

    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
  },
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    borderRadius: 3,
    marginBottom: 16,
    // fill: "rgba(246, 246, 246, 1)",
    // strokeWidth: 1,
    // stroke: "rgba(232, 232, 232, 1)",

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,

    padding: 10,
  },
  passwordContainer: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 3,

    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: 343,
    height: 50,
    flexShrink: 0,
  },
  passwordInput: {
    width: 343,
    height: 50,
    flexShrink: 0,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    flex: 1,
    padding: 10,
  },
  showPasswordText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  showPasswordButton: {
    padding: 10,
  },
  registerButton: {
    padding: 15,
    marginTop: 43,

    display: "flex",
    width: 343,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,

    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  registerButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  loginLink: {
    marginTop: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
});

export default LoginScreen;
