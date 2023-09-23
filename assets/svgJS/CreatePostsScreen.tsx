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

import Svg, { Path } from "react-native-svg";

// import SVGImg from "../assets/svg/logOut.svg";

import { SvgXml } from "react-native-svg";
import { logOutSvg } from "../svgJS/svg";

const CreatePostsScreen = () => {
  //   const [email, setEmail] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* <SVGImg width={500} height={200} /> */}
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <View style={styles.headerRight}>
          {/* <logOut /> */}
          {/* <Image
            style={[styles.svg]}
            tintColor="#000000"
            source={require("../assets/svg/logOut.svg")}
          /> */}
          <SvgXml xml={logOutSvg} style={styles.svg} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.profileData}>
          <Image
            style={styles.miniImage}
            source={require("../assets/favicon.png")}
          />
          <View style={styles.profileDataText}>
            <Text style={styles.profileName}>Natali Romanova</Text>
            <Text style={styles.profileEmail}>email@example.com</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.toolbar}>
        <Image style={styles.svg} source={require("../assets/svg/grid.svg")} />

        <Pressable style={styles.createBtn}>
          <Image
            style={styles.createBtn}
            source={require("../assets/svg/plusBtn.svg")}
          />
        </Pressable>
        <Image style={styles.svg} source={require("../assets/svg/user.svg")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 44,
    paddingBottom: 11,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    flex: 1,
    fontSize: 17,
    fontStyle: "normal",
  },
  headerRight: {
    marginRight: 10,
  },
  svg: {
    width: 24,
    height: 24,
    alignSelf: "center",
    // right: 10,
  },
  container: {
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: 489,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },
  profileData: {
    width: 171,
    height: 60,
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginLeft: 16,
    marginTop: 32,
  },

  miniImage: {
    alignSelf: "flex-start",
    width: 60,
    height: 60,
    flexShrink: 0,
    borderRadius: 16,
  },
  profileDataText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    color: "#212121",
    // font-family: Roboto,
    fontSize: 13,
    fontStyle: "normal",
  },
  profileEmail: {
    color: " #rgba(33, 33, 33, 0.80)",
    // font-family: Roboto,
    fontStyle: "normal",
    fontSize: 11,
  },
  createBtnTxt: {
    color: "Black",
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  createBtn: {
    width: 70,
    height: 40,
    flexShrink: 0,
    // backgroundColor: "rgba(255, 108, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
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
});

export default CreatePostsScreen;
