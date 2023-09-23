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
  ScrollView,
} from "react-native";

import { arrowLeft, Send } from "../assets/svgJS/svg";
import { SvgXml } from "react-native-svg";

const CommentsScreen = () => {
  const [coment, setСoment] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);
  const handleSend = () => {
    console.log(`Коментар:  ${coment}`);
    setСoment("");
  };

  const [inputFocused, setinputFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Коментарі</Text>
          <View style={styles.headerLeft}>
            <Image
              style={[styles.svg, { alignSelf: "center" }]}
              source={require("../assets/svg/arrowLeft.svg")}
            />
            {/* <SvgXml
              xml={arrowLeft}
              style={[styles.svg, { alignSelf: "center", top: 10 }]}
            /> */}
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="always"
          decelerationRate="normal"
        >
          <View>
            <Image
              style={styles.publicationImg}
              source={require("../assets/favicon.png")}
            />
            <View style={styles.coments}>
              <View style={styles.coment}>
                <Image
                  style={styles.miniImage}
                  source={require("../assets/favicon.png")}
                />
                <View style={styles.comentData}>
                  <Text style={styles.comentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.comentDate}>09 червня, 2020 | 08:40</Text>
                </View>
              </View>
              <View style={styles.MyComent}>
                <Image
                  style={styles.miniImage}
                  source={require("../assets/favicon.png")}
                />
                <View style={styles.MycomentData}>
                  <Text style={styles.comentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.comentDate}>09 червня, 2020 | 08:40</Text>
                </View>
              </View>
              <View style={styles.coment}>
                <Image
                  style={styles.miniImage}
                  source={require("../assets/favicon.png")}
                />
                <View style={styles.comentData}>
                  <Text style={styles.comentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.comentDate}>09 червня, 2020 | 08:40</Text>
                </View>
              </View>
              <View style={styles.MyComent}>
                <Image
                  style={styles.miniImage}
                  source={require("../assets/favicon.png")}
                />
                <View style={styles.MycomentData}>
                  <Text style={styles.comentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.comentDate}>09 червня, 2020 | 08:40</Text>
                </View>
              </View>
              <View style={styles.coment}>
                <Image
                  style={styles.miniImage}
                  source={require("../assets/favicon.png")}
                />
                <View style={styles.comentData}>
                  <Text style={styles.comentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.comentDate}>09 червня, 2020 | 08:40</Text>
                </View>
              </View>
              <View style={styles.MyComent}>
                <Image
                  style={styles.miniImage}
                  source={require("../assets/favicon.png")}
                />
                <View style={styles.MycomentData}>
                  <Text style={styles.comentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                  </Text>
                  <Text style={styles.comentDate}>09 червня, 2020 | 08:40</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.toolbar}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={[
                styles.InputContainer,
                inputFocused === true && styles.focusedInput,
              ]}
            >
              <TextInput
                value={coment}
                style={styles.input}
                placeholder="Коментувати..."
                onChangeText={setСoment}
                onFocus={() => setinputFocused(true)}
                onBlur={() => setinputFocused(false)}
              />
              <Pressable onPress={handleSend}>
                <Image
                  style={styles.send}
                  source={require("../assets/svg/Send.svg")}
                />
                {/* <SvgXml xml={Send} style={styles.send} /> */}
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  publicationImg: {
    marginTop: 32,
    alignSelf: "center",
    width: 343,
    height: 240,
    flexShrink: 0,
    borderRadius: 8,
  },

  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 44,
    paddingBottom: 11,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    position: "relative",
  },
  title: {
    color: "#212121",
    textAlign: "center",
    // fontFamily: Roboto,
    // flex: 1,
    fontSize: 17,
    fontStyle: "normal",
  },
  headerLeft: {
    position: "absolute",

    marginRight: 10,
    left: 16,
  },
  svg: {
    width: 24,
    height: 24,
    alignSelf: "center",
    // right: 10,
  },

  coments: {
    marginTop: 32,
    marginBottom: 52,
    flex: 1,
    alignItems: "center",
    gap: 52,
  },
  coment: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    gap: 32,
    width: 343,
    // width: "100%",
  },
  MyComent: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row-reverse",
    gap: 32,
    width: 343,
  },
  miniImage: {
    width: 28,
    height: 28,
    flexShrink: 0,
    borderRadius: 28,
  },
  comentData: {
    top: 12,
    flex: 1,
    alignItems: "flex-end",
    gap: 8,
    width: 267,
  },
  myComent: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  MycomentData: {
    top: 12,
    flex: 1,
    gap: 8,
    width: 267,
  },
  comentText: {
    color: "#212121",
    // font-family: Roboto,
    fontSize: 13,
    fontStyle: "normal",
  },
  comentDate: {
    color: "#BDBDBD",
    // fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 11,
  },

  toolbar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 39,
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,
    borderTopColor: "black",
    borderTopWidth: 1,
  },

  InputContainer: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,

    flexDirection: "row",
    alignItems: "center",

    width: 343,
    height: 50,
    flexShrink: 0,
  },
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    // fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 16,
    flex: 1,
    padding: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
  },

  send: { width: 34, height: 34, flexShrink: 0, right: 8 },
});

export default CommentsScreen;
