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
import {
  PlusIcon,
  ShareIcon,
  ChevronLeftIcon,
  EllipsisVerticalIcon
} from "react-native-heroicons/outline";
import { HeartIcon, PlayIcon,  HandThumbUpIcon  } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { Video } from "expo-av";

const ios = Platform.OS == "ios";
const topMargin = ios ? "" : " mt-3";
var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
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
          {/* <Image
            source={require("../../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.75 }}
          /> */}
          <Video
            source={{
              uri: "https://packaged-media.redd.it/0cv71vpc9nia1/pb/m2-res_1080p.mp4?m=DASHPlaylist.mpd&v=1&e=1703138400&s=6d853accf6f5111ef28f97ac96c8bd9a1fec93e1#t=0",
            }}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.backgroundVideo}
            style={{ width, height: height * 0.7 }}
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.9)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.45 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0 "
          />
          <View className="absolute w-full">
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
              <StatusBar style="light" />
              <View className="flex-row justify-between items-center mx-5 mt-2">
                
              <TouchableOpacity style={[styles.backIcon, styles.topIcons]} onPress={() => navigation.push("Home")}>
                  <ChevronLeftIcon
                    size="30"
                    strokeWidth={3}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.ellipsisIcon, styles.topIcons ]}>
                  <EllipsisVerticalIcon
                    size="32"
                    strokeWidth={2}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </View>
          <View
            style={styles.homeMid}
            className="absolute z-20 text-center w-full h-full flex-1 justify-center align-center items-center px-5 "
          >
            <Text style={styles.homeTitle}>Blade Runner 2049</Text>
            <View style={styles.movieUnderGroup}>
                    <Text className="mb-5" style={{color: "rgba(255, 255, 255, 0.7)"}}>
                      <HandThumbUpIcon 
                      size="13"
                      strokeWidth={2}
                      color="#83FE60"
                      className="align-middle"
                      />
                    <Text style={{color: "#83FE60"}}>  95 Likes</Text>  •  2017  •  Sci Fi  •  Movies</Text>
            </View>
            <View className="flex-row">
              <TouchableOpacity
                className="flex-row"
                style={[styles.homePlay, styles.homeBtn]}
                onPress={() => navigation.push("Movie")}
              >
                <PlayIcon size="15" color="white" />
                <Text style={styles.homeBtnText}>Play</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row"
                style={[styles.homeWatch, styles.homeBtn]}
              >
                <PlusIcon size="15" color="white" />
                <Text style={styles.homeBtnText}>Watch Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomIconsRow}   className="flex-row flex-1 justify-center align-center items-center">
          <View>
            <TouchableOpacity style={[styles.addIcon, styles.bottomIcons]}>
            <PlusIcon
              size="45"
              strokeWidth={2}
              color="white"
            />
            </TouchableOpacity>
            <Text className="text-center text-white text-md mt-3">Add to List</Text>
          </View>
         <View> 
          <TouchableOpacity style={[styles.likeIcon, styles.bottomIcons]} >
            <HandThumbUpIcon
              size="40"
              strokeWidth={2}
              color="white"
            />
            
            </TouchableOpacity>
            <Text className="text-center text-white text-md mt-3">Like</Text>
          </View>
          <View>
            <TouchableOpacity style={[styles.shareIcon, styles.bottomIcons]} >
              <ShareIcon
                size="40"
                strokeWidth={2}
                color="white"
              />
            </TouchableOpacity>
            <Text className="text-center text-white text-md mt-3">Recommend</Text>
          </View>
        </View>
        <View style={styles.bottomProlog} className=" flex-1 ">
          <Text style={styles.prologText}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point of
            use.
          </Text>
          <Text style={styles.castText}>
            Cast: Bradley Cooper, Carey Mulligan, Matt Boomer ... more
          </Text>
          <Text style={styles.castText}>
            Director: Bradley Cooper
          </Text>
        </View>
        <View style={styles.bottomProfile} className=" flex-1 ">
          <Text className="text-white font-bold text-base mb-2">
            Created By
          </Text>
          <Pressable style={styles.profileRow} className="flex-row align-center" onPress={() => navigation.push("Profile")}>
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="rounded-s"
              style={styles.iconImg}
            />
            <View className="ml-3 mt-2">
              <Text className="text-white font-bold text-base ">Tyler Lockett</Text>
              <Text  style={styles.profileDesc} className="text-white mb-3">It is a long established fact that a reader...</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.bottomMore} className=" flex-1 mb-3">
          <Text className="text-white font-bold text-base mb-3" style={{paddingHorizontal: 30}}>
            More Like This
          </Text>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 30 }}
            >
              <TouchableWithoutFeedback>
                <View className="space-y-1 mr-3">
                  <Image
                    source={require("../../assets/images/moviePoster2.png")}
                    className="rounded-2xl"
                    style={{ width: width * 0.32, height: height * 0.21 }}
                  />
                  
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View className="space-y-1 mr-3">
                  <Image
                    source={require("../../assets/images/moviePoster2.png")}
                    className="rounded-2xl"
                    style={{ width: width * 0.32, height: height * 0.21 }}
                  />
                  
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View className="space-y-1 mr-3">
                  <Image
                    source={require("../../assets/images/moviePoster2.png")}
                    className="rounded-2xl"
                    style={{ width: width * 0.32, height: height * 0.21 }}
                  />
                  
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View className="space-y-1 mr-3">
                  <Image
                    source={require("../../assets/images/moviePoster2.png")}
                    className="rounded-2xl"
                    style={{ width: width * 0.32, height: height * 0.21 }}
                  />
                  
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: width * 0.13,
    height: width * 0.13,
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
