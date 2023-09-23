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
import { SvgXml } from "react-native-svg";
import Svg, { Circle } from "react-native-svg";
import { SvgUri } from "react-native-svg";
// import SVGImg from "../assets/svg/add.svg";
//                     <SVGImg width={200} height={200} />;

import { messageCircle, mapPin, logOutSvg } from "../assets/svgJS/svg";

const ProfileScreen = () => {
  //   const [login, setLogin] = useState("");
  //     const [emailFocused, setEmailFocused] = useState(false);
  //   const [passwordFocused, setPasswordFocused] = useState(false);

  const [comentNumber, setComentNumber] = useState(0);
  const [likeNumber, setlikeNumber] = useState(0);

  //   const togglePasswordVisibility = () => {
  //     setShowPassword(!showPassword);
  //   };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <View style={{ justifyContent: "flex-end" }}>
          <ScrollView contentContainerStyle={{ justifyContent: "flex-end" }}>
            {/* <ScrollView
          contentContainerStyle={{
            flexBasis: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        > */}
            <View style={styles.wrapper}>
              <View style={styles.container}>
                <View style={styles.headerRight}>
                  <Image
                    style={[styles.svg]}
                    source={require("../assets/svg/logOut.svg")}
                  />
                  {/* <SvgXml xml={logOutSvg} style={styles.svg} /> */}
                </View>
                <Image
                  style={styles.UserImage}
                  source={require("../assets/favicon.png")}
                />
                <Text style={styles.title}>Natali Romanova</Text>

                <View style={styles.publication}>
                  <Image
                    style={styles.publicationImg}
                    source={require("../assets/favicon.png")}
                  />
                  <Text style={styles.publicationDescription}>Ліс</Text>
                  <View style={styles.publicationInfo}>
                    <View style={styles.publicationElem}>
                      {/* <SvgXml xml={messageCircle} style={[[styles.svg]]} /> */}
                      {comentNumber === 0 ? (
                        <Image
                          style={[[styles.svg]]}
                          source={require("../assets/svg/messageCircle.svg")}
                          //   source={require("../assets/svg/thumbsUp.svg")}
                        />
                      ) : (
                        <Image
                          style={[[styles.svg]]}
                          source={require("../assets/svg/messageCircleFill.svg")}
                          //   source={require("../assets/svg/thumbsUp.svg")}
                        />
                      )}

                      <Text style={styles.publicationsNumber}>
                        {comentNumber}
                      </Text>
                      {likeNumber === 0 ? (
                        <Image
                          style={[[styles.svg], { marginLeft: 24 }]}
                          source={require("../assets/svg/thumbsUp.svg")}
                        />
                      ) : (
                        <Image
                          style={[[styles.svg], { marginLeft: 24 }]}
                          source={require("../assets/svg/thumbsUpFill.svg")}
                        />
                      )}

                      <Text style={styles.publicationsNumber}>
                        {likeNumber}
                      </Text>
                    </View>
                    <View style={styles.publicationElem}>
                      {/* <SvgXml xml={mapPin} style={styles.svg} /> */}
                      <Image
                        style={styles.svg}
                        source={require("../assets/svg/mapPin.svg")}
                      />
                      <Text style={styles.publicationLocation}>Ukraine</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* <View style={styles.toolbar}>
          <View
            style={{
              width: 40,
              height: 40,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={styles.svg}
              source={require("../assets/svg/grid.svg")}
            />
          </View> */}
        {/* <SvgXml xml={gridSvg} style={styles.svg} /> */}

        {/* <Pressable style={styles.userBtn}>
            <Image
              style={[
                [styles.svg],
                {
                  tintColor: "rgba(255, 255, 255, 1)",
                },
              ]}
              source={require("../assets/svg/user.svg")}
            /> */}
        {/* <SvgXml xml={userSvg} style={styles.svg} /> */}
        {/* </Pressable>
          <Image
            style={{ width: 40, height: 40, alignSelf: "center" }}
            source={require("../assets/svg/add.svg")}
          /> */}
        {/* <SvgXml xml={userSvg} style={styles.svg} /> */}
        {/* </View> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    position: "absolute",
    // marginRight: 10,
    top: 22,
    right: 16,
  },

  publications: {
    flex: 1,
    alignItems: "center",
    gap: 34,
  },

  publication: {
    marginTop: 32,
    flex: 1,
    width: 343,
  },
  publicationImg: {
    alignSelf: "center",
    width: 343,
    height: 240,
    flexShrink: 0,
    borderRadius: 8,
  },
  publicationDescription: {
    color: "#212121",
    // fontFamily: Roboto;
    fontSize: 16,

    fontStyle: "normal",
  },
  publicationInfo: {
    marginTop: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: 40,
  },
  publicationElem: {
    flexDirection: "row",
  },
  publicationsNumber: {
    color: "#BDBDBD",
    // fontSamily: Roboto,
    fontSize: 16,
    fontStyle: "normal",
  },
  publicationLocation: {
    color: "#212121",
    textAlign: "right",
    // fontSamily: Roboto,
    fontSize: 16,
    fontStyle: "normal",
    textDecorationLine: "underline",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  UserImage: {
    alignSelf: "center",
    width: 120,
    height: 120,
    flexShrink: 0,
    borderRadius: 20,
    position: "absolute",
    top: -63,
    backgroundColor: "black",
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
    marginTop: 230,

    flexShrink: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    // fontFamily: "Roboto-Medium",
    marginTop: 92,
    // fontWeight: "bold",
    marginBottom: 20,

    color: "#212121",
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 30,
  },

  focusedInput: {
    borderColor: "#FF6C00",
  },

  userBtn: {
    width: 70,
    height: 40,
    flexShrink: 0,
    backgroundColor: "rgba(255, 108, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  toolbar: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 39,
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  svg: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },
});

export default ProfileScreen;
