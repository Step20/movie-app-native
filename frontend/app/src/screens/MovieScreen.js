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

export default function HomeScreen() {
  
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
                    <Text className="mb-6" style={{color: "rgba(255, 255, 255, 0.7)"}}>
                      <HandThumbUpIcon size="12"
                    strokeWidth={2}
                    color="#83FE60"/><Text style={{color: "#83FE60"}}>  95 Likes</Text>  •  2017  •  Sci Fi  •  Movies</Text>
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

        <View style={styles.movieBottom} className="flex-row flex-1 justify-center align-center items-center">
          <View>
            <TouchableOpacity style={[styles.addIcon, styles.bottomIcons]}>
            <PlusIcon
              size="45"
              strokeWidth={2}
              color="white"
            />
            </TouchableOpacity>
            <Text className="text-center text-white text-md mt-4">Add to List</Text>
          </View>
         <View> 
          <TouchableOpacity style={[styles.likeIcon, styles.bottomIcons]} >
            <HandThumbUpIcon
              size="40"
              strokeWidth={2}
              color="white"
            />
            
            </TouchableOpacity>
            <Text className="text-center text-white text-md mt-4">Like</Text>
          </View>
          <View>
            <TouchableOpacity style={[styles.shareIcon, styles.bottomIcons]} >
              <ShareIcon
                size="40"
                strokeWidth={2}
                color="white"
              />
            </TouchableOpacity>
            <Text className="text-center text-white text-md mt-4">Recommend</Text>
          </View>
        </View>
        <View className="pb-12 space-y-4">
          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconImg: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
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
    marginHorizontal: 28,
    borderRadius: 100,  
    backgroundColor: "#2A2A2A",
  },
  addIcon: {
  
    
  },
  movieBottom: {
    marginTop: height * -.08
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
