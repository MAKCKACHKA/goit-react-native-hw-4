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
import {
  mapPin,
  arrowLeft,
  trash,
  camera,
  cameraBlack,
} from "../assets/svgJS/svg";
import { SvgXml } from "react-native-svg";

const CreatePostsScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const [nameFocused, setNameFocused] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);

  const handleLogin = () => {
    console.log(`name: ${name}, location: ${location}`);
    setName("");
    setLocation("");
  };

  // useEffect(() => {
  //   // Скрыть навигацию на этой странице
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        {/* <View style={styles.header}>
          <Text style={styles.title}>Створити публікацію</Text>
          <View style={styles.headerLeft}>
            <Image
              style={[styles.svg, { alignSelf: "center" }]}
              source={require("../assets/svg/arrowLeft.svg")}
            /> */}
        {/* <SvgXml
              xml={arrowLeft}
              style={[styles.svg, { alignSelf: "center", top: 10 }]}
            /> */}
        {/* </View> */}
        {/* </View> */}
        <View style={styles.publications}>
          <View style={styles.publication}>
            <View style={styles.imageholder}>
              <Image
                style={styles.publicationImg}
                source={require("../assets/favicon.png")}
              />
              <View style={styles.cameraHolder}>
                {/* <Image
                style={styles.svg}
                tintColor={"rgba(189, 189, 189, 1)"}
                source={require("../assets/svg/camera.svg")}
              /> */}
                {/* <SvgXml xml={camera} style={[styles.svg]} /> */}
                <Image
                  style={styles.svg}
                  tintColor={"rgba(189, 189, 189, 1)"}
                  source={require("../assets/svg/cameraBlack.svg")}
                />
                {/* <SvgXml xml={cameraBlack} style={[styles.svg]} /> */}
              </View>
            </View>
            <Text style={styles.photoEdit}>Завантажте фото</Text>
            {/* <Text style={styles.photoEdit}>Редагувати фото</Text> */}

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={styles.wrapper}
            >
              <TextInput
                value={name}
                style={[
                  styles.input,
                  nameFocused === true && styles.focusedInput,
                ]}
                placeholder="Назва..."
                onChangeText={setName}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              />
              <View
                style={[
                  styles.locationContainer,
                  locationFocused === true && styles.focusedInput,
                ]}
              >
                <Image
                  style={styles.svg}
                  source={require("../assets/svg/mapPin.svg")}
                />
                <TextInput
                  value={location}
                  style={styles.locationInput}
                  placeholder="Місцевість..."
                  onChangeText={setLocation}
                  onFocus={() => setLocationFocused(true)}
                  onBlur={() => setLocationFocused(false)}
                />
              </View>

              <Pressable style={styles.publishBtn} onPress={handleLogin}>
                <Text style={styles.publishBtnText}>Опубліковати</Text>
              </Pressable>
            </KeyboardAvoidingView>
          </View>
        </View>
        <View style={styles.toolbar}>
          <Pressable style={styles.delBtn}>
            <Image
              style={styles.svg}
              source={require("../assets/svg/trash.svg")}
            />
            {/* <SvgXml xml={trash} style={styles.svg} /> */}
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageholder: {
    position: "relative",
    width: 343,
    height: 240,
    flexShrink: 0,
    borderRadius: 8,
  },
  cameraHolder: {
    left: "40%",
    top: "40%",
    position: "absolute",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 100,
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
  photoEdit: {
    top: 8,
    color: "#BDBDBD",
    // font-family: Roboto;
    fontSize: 16,
    fontStyle: "normal",
    marginBottom: 32,
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
  delBtn: {
    width: 70,
    height: 40,
    flexShrink: 0,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "center",
    // gap: 39,
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,
    // borderTopColor: "black",
    // borderTopWidth: 1,
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
  locationContainer: {
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
  locationInput: {
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    flex: 1,
    padding: 10,
  },
  publishBtn: {
    padding: 16,
    marginTop: 32,

    borderRadius: 100,
    // backgroundColor: "#FF6C00",
    backgroundColor: "#F6F6F6",

    color: "white",
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
  publishBtnText: {
    color: "#BDBDBD",
    // color: "#FFF",
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontStyle: "normal",
  },
});

export default CreatePostsScreen;
