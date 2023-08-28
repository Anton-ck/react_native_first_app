import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Post, NoPosts } from "../Components/Post";
import ProfileContainer from "../Components/PostsProfile";

// const DATA = [
//   {
//     id: "1",
//     image: require("../../assets/img/post1.jpeg"),
//     pictureName: "Ліс",
//     commentsCount: "0",
//     location: "Ivano-Frankivs'k Region, Ukraine",
//   },
//   {
//     id: "2",
//     image: require("../../assets/img/post2.jpeg"),
//     pictureName: "Захід на чорному морі",
//     commentsCount: "0",
//     location: "Cherkassy Region, Ukraine",
//   },
//   {
//     id: "3",
//     image: require("../../assets/img/post2.jpeg"),
//     pictureName: "Захід на чорному морі",
//     commentsCount: "0",
//     location: "Cherkassy Region, Ukraine",
//   },
//   {
//     id: "4",
//     image: require("../../assets/img/post2.jpeg"),
//     pictureName: "Захід на чорному морі",
//     commentsCount: "0",
//     location: "Cherkassy Region, Ukraine",
//   },
// ];

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  // console.log(route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [route.params, ...prevState]);
    }
  }, [route.params]);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {!route.params ? (
        <>
          <ProfileContainer />
          <NoPosts />
        </>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          // keyExtractor={(item) => item.id}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Post
              image={{ uri: item.photo }}
              pictureName={item.photoName}
              commentsCount={commentsCount}
              locationCoords={item.location}
              locationName={item.locationName}
            />
          )}
          ListHeaderComponent={<ProfileContainer />}
        />
      )}
    </View>
  );
};

export default PostsScreen;

const style = StyleSheet.create({
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
