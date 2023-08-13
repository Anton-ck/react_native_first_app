import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const DATA = [
  {
    id: "1",
    image: require("../../assets/img/post1.jpeg"),
    pictureName: "Ліс",
    commentsCount: "0",
    location: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: "2",
    image: require("../../assets/img/post2.jpeg"),
    pictureName: "Захід на чорному морі",
    commentsCount: "0",
    location: "Cherkassy Region, Ukraine",
  },
  {
    id: "3",
    image: require("../../assets/img/post2.jpeg"),
    pictureName: "Захід на чорному морі",
    commentsCount: "0",
    location: "Cherkassy Region, Ukraine",
  },
  {
    id: "4",
    image: require("../../assets/img/post2.jpeg"),
    pictureName: "Захід на чорному морі",
    commentsCount: "0",
    location: "Cherkassy Region, Ukraine",
  },
];

const Post = ({ image, pictureName, commentsCount, location }) => (
  <View style={profileDataStyled.postContainer}>
    <Image source={image} style={profileDataStyled.imageStyle} />
    <Text style={profileDataStyled.pictureName}>{pictureName}</Text>
    <View style={profileDataStyled.infoBlock}>
      <View style={profileDataStyled.infoContainer}>
        <Feather name="message-circle" size={24} color="#BDBDBD" />
        <Text style={profileDataStyled.commentsCount}>{commentsCount}</Text>
      </View>
      <View style={profileDataStyled.infoContainer}>
        <Feather name="map-pin" size={24} color="#BDBDBD" />
        <Text style={profileDataStyled.location}>{location}</Text>
      </View>
    </View>
  </View>
);

const Posts = () => {
  return (
    <View>
      <View style={profileDataStyled.profileContainer}>
        <Image
          source={require("../../assets/img/ProfileImg/romanova.jpeg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 16,
          }}
        />
        <View style={profileDataStyled.profileTextContainer}>
          <Text style={profileDataStyled.profileName}>Natali Romanova</Text>
          <Text style={profileDataStyled.profileEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post
            image={item.image}
            pictureName={item.pictureName}
            commentsCount={item.commentsCount}
            location={item.location}
          />
        )}
      />
    </View>
  );
};

export default Posts;

const profileDataStyled = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 16,
    paddingBottom: 20,
  },
  profileTextContainer: {
    justifyContent: "center",
    marginLeft: 8,
  },
  profileName: {
    fontFamily: "Roboto_700Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  profileEmail: {
    fontFamily: "Roboto_300Light",
    fontSize: 11,
    lineHeight: 13,
  },
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
});
