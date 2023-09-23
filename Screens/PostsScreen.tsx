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
import { logOutSvg, gridSvg, plusBtnSvg, userSvg } from "../assets/svgJS/svg";
import { SvgXml } from "react-native-svg";

const PostsScreen = () => {
  //   const [email, setEmail] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.wrapper}>
      {/* <SVGImg width={500} height={200} /> */}
      {/* <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <View style={styles.headerRight}>
          <Image
            style={[styles.svg]}
            // tintColor="#000000"
            source={require("../assets/svg/logOut.svg")}
          />
          {/* <SvgXml xml={logOutSvg} style={styles.svg} /> */}
      {/* </View>
      </View>  */}
      <ScrollView>
        <View
          style={{
            width: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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
          <View style={styles.publications}>
            <View style={styles.publication}>
              <Image
                style={styles.publicationImg}
                source={require("../assets/favicon.png")}
              />
              <Text style={styles.publicationDescription}>Ліс</Text>
              <View style={styles.publicationInfo}>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={messageCircle} style={styles.svg} /> */}

                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/messageCircle.svg")}
                  />

                  <Text style={styles.publicationsComentNumber}>0</Text>
                </View>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={mapPin} style={styles.svg} /> */}
                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/mapPin.svg")}
                  />
                  <Text style={styles.publicationLocation}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.publication}>
              <Image
                style={styles.publicationImg}
                source={require("../assets/favicon.png")}
              />
              <Text style={styles.publicationDescription}>Ліс</Text>
              <View style={styles.publicationInfo}>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={messageCircle} style={styles.svg} /> */}

                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/messageCircle.svg")}
                  />

                  <Text style={styles.publicationsComentNumber}>0</Text>
                </View>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={mapPin} style={styles.svg} /> */}
                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/mapPin.svg")}
                  />
                  <Text style={styles.publicationLocation}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.publication}>
              <Image
                style={styles.publicationImg}
                source={require("../assets/favicon.png")}
              />
              <Text style={styles.publicationDescription}>Ліс</Text>
              <View style={styles.publicationInfo}>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={messageCircle} style={styles.svg} /> */}

                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/messageCircle.svg")}
                  />

                  <Text style={styles.publicationsComentNumber}>0</Text>
                </View>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={mapPin} style={styles.svg} /> */}
                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/mapPin.svg")}
                  />
                  <Text style={styles.publicationLocation}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.publication}>
              <Image
                style={styles.publicationImg}
                source={require("../assets/favicon.png")}
              />
              <Text style={styles.publicationDescription}>Ліс</Text>
              <View style={styles.publicationInfo}>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={messageCircle} style={styles.svg} /> */}

                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/messageCircle.svg")}
                  />

                  <Text style={styles.publicationsComentNumber}>0</Text>
                </View>
                <View style={styles.publicationElem}>
                  {/* <SvgXml xml={mapPin} style={styles.svg} /> */}
                  <Image
                    style={styles.svg}
                    source={require("../assets/svg/mapPin.svg")}
                  />
                  <Text style={styles.publicationLocation}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.toolbar}>
        <Image style={styles.svg} source={require("../assets/svg/grid.svg")} /> */}
      {/* <SvgXml xml={gridSvg} style={styles.svg} /> */}

      {/* <Pressable style={styles.createBtn}>
          <Image
            style={styles.createBtn}
            source={require("../assets/svg/plusBtn.svg")}
          /> */}
      {/* <SvgXml xml={plusBtnSvg} style={styles.svg} /> */}
      {/* </Pressable>
        <Image style={styles.svg} source={require("../assets/svg/user.svg")} /> */}
      {/* <SvgXml xml={userSvg} style={styles.svg} /> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
  publicationsComentNumber: {
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
    flex: 1,
    fontSize: 17,
    fontStyle: "normal",
  },
  headerRight: {
    position: "absolute",

    marginRight: 10,
    right: 10,
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
    alignSelf: "flex-start",
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

export default PostsScreen;
