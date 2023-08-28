import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Post = ({ image, pictureName, locationCoords, locationName, commentsCount }) => {
  const navigation = useNavigation();
  console.log(locationCoords);

  return (
    <View style={postStyled.postContainer}>
      <Image source={image} style={postStyled.imageStyle} />
      <Text style={postStyled.pictureName}>{pictureName}</Text>
      <View style={postStyled.infoBlock}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Comments");
          }}
        >
          <View style={postStyled.infoContainer}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={postStyled.commentsCount}>{commentsCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map", { locationCoords, pictureName });
          }}
        >
          <View style={postStyled.infoContainer}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={postStyled.location}>{locationName}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const NoPosts = () => (
  <View style={postStyled.postContainer}>
    <Image source={require("../../assets/img/i_await.png")} style={postStyled.imageStyle} />
    <Text style={postStyled.noContent}>You don't have any content yet</Text>
  </View>
);

const postStyled = StyleSheet.create({
  postContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 32,
    marginHorizontal: 16,
  },

  imageStyle: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  pictureName: {
    marginTop: 5,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    lineHeight: 18.75,
  },
  infoBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  commentsCount: {
    color: "#BDBDBD",
    alignSelf: "center",
    marginLeft: 5,
  },
  location: {
    color: "#212121",
    marginLeft: 5,
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  noContent: {
    marginTop: 23,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
    color: "#1e9eff",
  },
});
