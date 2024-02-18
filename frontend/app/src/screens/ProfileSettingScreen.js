import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    StyleSheet,
    Button,
    Pressable,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { LinearGradient } from "expo-linear-gradient";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { ChevronLeftIcon, ChevronRightIcon } from "react-native-heroicons/outline";
  import { BellIcon  } from "react-native-heroicons/solid";
  import { StatusBar } from "expo-status-bar";
  import { Video } from "expo-av";
  
  const ios = Platform.OS == "ios";
  const topMargin = ios ? "" : " mt-3";
  var { width, height } = Dimensions.get("window");
  
  export default function PSScreen() {
    const navigation = useNavigation();
    
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          style={{ backgroundColor: "#171717" }}
          className="h-full"
        >
          <View>
          {/* <LinearGradient
              colors={[
                "transparent", 
                "rgba(35, 35, 35, 1)",
                "rgba(15, 15, 15, 1)",
               
              ]}
              style={{ width, height: height  }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              className="absolute "
            /> */}
            <View className="absolute w-full">
              <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row  items-center mx-5 mt-5">
                <TouchableOpacity className="absolute" style={[styles.backIcon, styles.topIcons]} >
                    <ChevronLeftIcon
                      size="30"
                      strokeWidth={3}
                      color="white"
                    />
                  </TouchableOpacity>
                  <Text className="text-white text-2xl font-bold items-center justify-center align-center mx-auto">Settings</Text>
                  {/* <TouchableOpacity style={[styles.backIcon, styles.topIcons]} >
                    <ChevronLeftIcon
                      size="30"
                      strokeWidth={3}
                      color="white"
                    />
                  </TouchableOpacity> */}
                </View>
              </SafeAreaView>
            </View>
            <View
              style={styles.homeMid}
              className=" z-20 text-center w-full h-full flex-1 px-5 "
            >
                <View className="flex-row justify-between items-center mt-2">
                    <View>
                        <Text className="text-white text-base">Welcome back,</Text>
                        <Text className="text-white text-3xl font-bold">Tyler Lockett</Text>
                    </View>
                    <Image
                        source={require("../../assets/images/profile.jpg")}
                        className="rounded-s"
                        style={styles.iconImg}
                    />
                </View>
            </View>
            <View className=" flex-1 justify-center align-center items-center mt-10">
                  <View className="rounded-2xl flex-row justify-between align-center items-center p-4" style={styles.settingBox}>
                    <View className="opacity-60 flex-row align-center items-center">
                        <BellIcon
                        size="45"
                        strokeWidth={3}
                        color="white"
                        />
                        <Text className="ml-4 text-white font-600 text-2xl">Notifcations</Text>
                    </View>
                    <View className="opacity-60 ">
                        <ChevronRightIcon
                            size="40"
                            strokeWidth={2}
                            color="white"
                        /> 
                    </View>
                   
                  </View>
                  <View className="rounded-2xl flex-row justify-between align-center items-center p-4 mt-3" style={styles.settingBox}>
                    <View className="opacity-60 flex-row align-center items-center">
                        <BellIcon
                        size="45"
                        strokeWidth={3}
                        color="white"
                        />
                        <Text className="ml-4 text-white font-600 text-2xl">Notifcations</Text>
                    </View>
                    <View className="opacity-60 ">
                        <ChevronRightIcon
                            size="40"
                            strokeWidth={2}
                            color="white"
                        /> 
                    </View>
                   
                  </View>
                  <View className="rounded-2xl flex-row justify-between align-center items-center p-4 mt-3" style={styles.settingBox}>
                    <View className="opacity-60 flex-row align-center items-center">
                        <BellIcon
                        size="45"
                        strokeWidth={3}
                        color="white"
                        />
                        <Text className="ml-4 text-white font-600 text-2xl">Notifcations</Text>
                    </View>
                    <View className="opacity-60 ">
                        <ChevronRightIcon
                            size="40"
                            strokeWidth={2}
                            color="white"
                        /> 
                    </View>
                   
                  </View>
                  <View className="rounded-2xl flex-row justify-between align-center items-center p-4 mt-3" style={styles.settingBox}>
                    <View className="opacity-60 flex-row align-center items-center">
                        <BellIcon
                        size="45"
                        strokeWidth={3}
                        color="white"
                        />
                        <Text className="ml-4 text-white font-600 text-2xl">Notifcations</Text>
                    </View>
                    <View className="opacity-60 ">
                        <ChevronRightIcon
                            size="40"
                            strokeWidth={2}
                            color="white"
                        /> 
                    </View>
                   
                  </View>
                  <Text className="text-white mt-3 opacity-20">Version: 16.6.1 (37) 5.0.1-001</Text>
            </View>
            <View className=" flex-1 justify-center align-center items-center mt-10">
                <View className="rounded-2xl flex-row justify-center align-center items-center p-4 mt-3" style={styles.signOutBox}>
                  <Text className="text-white text-2xl font-semibold">Sign Out</Text>
                </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    settingBox: {
        backgroundColor: "#2A2A2A",
        width: "92%",
        height: height * 0.095,
    },
    signOutBox: {
        backgroundColor: "#197AEC",
        width: "92%",
        height: height * 0.095,
    },
    iconImg: {
      width: width * 0.15,
      height: width * 0.15,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "white",
    },
    profileDesc: {
      opacity: .4,
      fontSize: 12
    },
    profileRow: {
      alignItems: "center"
    },
    backIcon: {
      backgroundColor: "#197AEC",
    },
    ellipsisIcon: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      transform: [{ rotate: '90deg'}]
    },
    topIcons: {
      width: width * 0.105,
      height: width * 0.105,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    bottomIcons: {
      width: width * 0.18,
      height: width * 0.18,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 31,
      borderRadius: 100,  
      backgroundColor: "#2A2A2A",
    },
    addIcon: {
    
      
    },
    bottomIconsRow: {
      marginTop: ios ? height * -.105 : height * -.085
    },
    bottomProlog: {
      marginTop: height * .023,
      paddingHorizontal: 30  
    },
    bottomProfile: {
      marginTop: height * .021,
      paddingHorizontal: 30  
    },
    bottomMore: {
      marginTop: height * .025,
      //paddingHorizontal: 30  
    },
    prologText: {
      color: "white",
      marginBottom: 7,
      fontSize: 13,
    },
    castText: {
      color: "white",
      fontSize: 11,
      fontWeight: "700",
      opacity: .3,
      lineHeight: 15.5
    },
    homeTitle: {
      color: "white",
      fontSize: 38,
      fontWeight: "600",
      textAlign: "center",
    },
    homeBtn: {
      width: width * 0.35,
      height: height * 0.05,
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      margin: 10,
    },
    homePlay: {
      backgroundColor: "#197AEC",
    },
    homeWatch: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    homeBtnText: {
      fontSize: 16,
      color: "white",
      marginLeft: 4,
    },
    homeMid: {
      marginTop: height * 0.13,
    },
    backgroundVideo: {
      height: height,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
    },
  });
  