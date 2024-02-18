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
    TextInput,
    ImageBackground
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { useSearchBox } from 'react-instantsearch-core';
  import { LinearGradient } from "expo-linear-gradient";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { ChevronLeftIcon,   } from "react-native-heroicons/outline";
  import { BellIcon, HandThumbUpIcon, PlayIcon,} from "react-native-heroicons/solid";
  import { StatusBar } from "expo-status-bar";
  import { Video } from "expo-av";
  
  const ios = Platform.OS == "ios";
  const topMargin = ios ? "" : " mt-3";
  var { width, height } = Dimensions.get("window");
  
  export default function SearchScreen() {
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
            <View className="absolute justify-around w-full">
              <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row items-center mx-5 mt-5">
                <TouchableOpacity style={[styles.backIcon, styles.topIcons]} >
                    <ChevronLeftIcon
                      size="25"
                      strokeWidth={3}
                      color="white"
                    />
                  </TouchableOpacity> 
                    <TextInput
                    className="rounded-3xl  ml-4 p-4 pb-5 text-lg"
                    style={styles.input}
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    autoCorrect={false}
                    spellCheck={false}
                    autoComplete="off"
                    placeholder="Search"
                    placeholderTextColor={"grey"}
                    />
                </View>
              </SafeAreaView>
            </View>
            <View
              style={styles.homeMid}
              className=" z-20 text-center w-full h-full flex-1 px-5 "
            >
               <View style={styles.featuredGroup}>
            <Text className="text-white font-bold text-lg mb-3">
              Recommend Movies & TV Shows
            </Text>
            <View className="pb-4">
                < ImageBackground
                  source={require("../../assets/images/moviePoster2.png")}
                  className="rounded-2xl flex-1"
                  imageStyle={{ borderRadius: 15}}
                  style={{ width: width * 0.9, height: height * 0.13, }}
                >
                <LinearGradient
                    colors={[
                    "transparent",
                    "rgba(23, 23, 23, 0.8)",
                    "rgba(23, 23, 23, .85)",
                    ]}
                    style={styles.linearGradient}
                    start={{ x: 0.1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
              <View className=" bottom-0 flex-row items-center  mt-9"> 
                <View className="justify-around flex-1 mx-4 align-middle">
                  <Text className="text-white font-bold text-xl items-center ">Ex Machina</Text>
                  <View style={styles.movieUnderGroup}>
                    <Text className="text-xs " style={{color: "rgba(255, 255, 255, 0.7)"}}>
                      Action  •  2h 48m 
                      </Text>
                  </View>
                </View>
                <View className="flex-row m-2 mx-2 pt-3 ">
                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homePlay, styles.homeBtn]}
                    onPress={() => navigation.push("Movie")}
                  >
                    <PlayIcon size="12" color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homeWatch, styles.homeBtn]}
                  >
                    <Text style={styles.homeBtnText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
                </LinearGradient>
              </ ImageBackground>
            
            </View>
            <View className="pb-4">
                < ImageBackground
                  source={require("../../assets/images/moviePoster2.png")}
                  className="rounded-2xl flex-1"
                  imageStyle={{ borderRadius: 15}}
                  style={{ width: width * 0.9, height: height * 0.13, }}
                >
                <LinearGradient
                    colors={[
                    "transparent",
                    "rgba(23, 23, 23, 0.8)",
                    "rgba(23, 23, 23, .85)",
                    ]}
                    style={styles.linearGradient}
                    start={{ x: 0.1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
              <View className=" bottom-0 flex-row items-center  mt-9"> 
                <View className="justify-around flex-1 mx-4 align-middle">
                  <Text className="text-white font-bold text-xl items-center ">Ex Machina</Text>
                  <View style={styles.movieUnderGroup}>
                    <Text className="text-xs " style={{color: "rgba(255, 255, 255, 0.7)"}}>
                      Action  •  2h 48m 
                      </Text>
                  </View>
                </View>
                <View className="flex-row m-2 mx-2 pt-3 ">
                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homePlay, styles.homeBtn]}
                    onPress={() => navigation.push("Movie")}
                  >
                    <PlayIcon size="12" color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homeWatch, styles.homeBtn]}
                  >
                    <Text style={styles.homeBtnText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
                </LinearGradient>
              </ ImageBackground>
            
            </View>
            <View className="pb-4">
                < ImageBackground
                  source={require("../../assets/images/moviePoster2.png")}
                  className="rounded-2xl flex-1"
                  imageStyle={{ borderRadius: 15}}
                  style={{ width: width * 0.9, height: height * 0.13, }}
                >
                <LinearGradient
                    colors={[
                    "transparent",
                    "rgba(23, 23, 23, 0.8)",
                    "rgba(23, 23, 23, .85)",
                    ]}
                    style={styles.linearGradient}
                    start={{ x: 0.1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
              <View className=" bottom-0 flex-row items-center  mt-9"> 
                <View className="justify-around flex-1 mx-4 align-middle">
                  <Text className="text-white font-bold text-xl items-center ">Ex Machina</Text>
                  <View style={styles.movieUnderGroup}>
                    <Text className="text-xs " style={{color: "rgba(255, 255, 255, 0.7)"}}>
                      Action  •  2h 48m 
                      </Text>
                  </View>
                </View>
                <View className="flex-row m-2 mx-2 pt-3 ">
                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homePlay, styles.homeBtn]}
                    onPress={() => navigation.push("Movie")}
                  >
                    <PlayIcon size="12" color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homeWatch, styles.homeBtn]}
                  >
                    <Text style={styles.homeBtnText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
                </LinearGradient>
              </ ImageBackground>
            
            </View>
            <View className="pb-4">
                < ImageBackground
                  source={require("../../assets/images/moviePoster2.png")}
                  className="rounded-2xl flex-1"
                  imageStyle={{ borderRadius: 15}}
                  style={{ width: width * 0.9, height: height * 0.13, }}
                >
                <LinearGradient
                    colors={[
                    "transparent",
                    "rgba(23, 23, 23, 0.8)",
                    "rgba(23, 23, 23, .85)",
                    ]}
                    style={styles.linearGradient}
                    start={{ x: 0.1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
              <View className=" bottom-0 flex-row items-center  mt-9"> 
                <View className="justify-around flex-1 mx-4 align-middle">
                  <Text className="text-white font-bold text-xl items-center ">Ex Machina</Text>
                  <View style={styles.movieUnderGroup}>
                    <Text className="text-xs " style={{color: "rgba(255, 255, 255, 0.7)"}}>
                      Action  •  2h 48m 
                      </Text>
                  </View>
                </View>
                <View className="flex-row m-2 mx-2 pt-3 ">
                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homePlay, styles.homeBtn]}
                    onPress={() => navigation.push("Movie")}
                  >
                    <PlayIcon size="12" color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-row"
                    style={[styles.homeWatch, styles.homeBtn]}
                  >
                    <Text style={styles.homeBtnText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
                </LinearGradient>
              </ ImageBackground>
            
            </View>
          </View>
            </View>         
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
      },
    input: {
        height: 40,
        backgroundColor: "#2A2A2A",
        width: "85%",
        
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
        width: width * 0.09,
        height: width * 0.09,
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
        //paddingHorizontal: 22  
      },
      featuredGroup: {
        marginTop: height * .025,
          
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
        
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        margin: 10,
      },
      homePlay: {
        width: width * .08,
        height: width * .08,
        backgroundColor: "#197AEC",
        marginRight: -2,
        
      },
      homeWatch: {
        width: width * .2,
        height:  width * .08,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
      homeBtnText: {
        fontSize: 13,
        color: "white",
        marginLeft: 4,
      },
      homeMid: {
        marginTop: height * 0.115,
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
    