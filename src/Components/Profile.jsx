import { View, Text, Image, StyleSheet, ImageBackground, FlatList } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import BG from "../../assets/img/background.png";
import LogoutBtn from "./LogoutButton";
import { useState } from "react";

const DATA = [
  {
    id: "1",
    image: require("../../assets/img/post1.jpeg"),
    pictureName: "Ліс",
    commentsCount: "0",
    location: "Ukraine",
  },
  {
    id: "2",
    image: require("../../assets/img/post2.jpeg"),
    pictureName: "Захід на чорному морі",
    commentsCount: "0",
    location: "Ukraine",
  },
  {
    id: "3",
    image: require("../../assets/img/post2.jpeg"),
    pictureName: "Захід на чорному морі",
    commentsCount: "0",
    location: "Ukraine",
  },
  {
    id: "4",
    image: require("../../assets/img/post2.jpeg"),
    pictureName: "Захід на чорному морі",
    commentsCount: "0",
    location: "Ukraine",
  },
];

const Post = ({ image, pictureName, commentsCount, location }) => (
  <View style={profileDataStyled.postContainer}>
    <Image source={image} style={profileDataStyled.imageStyle} />
    <Text style={profileDataStyled.pictureName}>{pictureName}</Text>
    <View style={profileDataStyled.infoBlock}>
      <View style={profileDataStyled.infoContainer}>
        <Feather name="message-circle" size={24} style={profileDataStyled.commentsIcon} />
        <Text style={profileDataStyled.commentsCount}>{commentsCount}</Text>
        <Feather name="thumbs-up" size={22} color="#FF6C00" />
        <Text style={profileDataStyled.commentsCount}>153</Text>
      </View>
      <View style={profileDataStyled.infoContainer}>
        <Feather name="map-pin" size={24} color="#BDBDBD" />
        <Text style={profileDataStyled.location}>{location}</Text>
      </View>
    </View>
  </View>
);

const ProfileContainer = () => (
  <>
    <View style={profileDataStyled.avatar}>
      <Image
        source={require("../../assets/img/ProfileImg/romanova.jpeg")}
        style={{
          width: 120,
          height: 120,
          borderRadius: 16,
        }}
      />

      <View style={profileDataStyled.iconClose}>
        <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
      </View>
      <View style={profileDataStyled.iconExit}>
        <LogoutBtn />
      </View>
    </View>

    <Text style={profileDataStyled.name}>Natali Romanova</Text>
  </>
);

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  return (
    <View style={profileDataStyled.container}>
      <ImageBackground source={BG} resizeMode="cover" style={profileDataStyled.backgroundImage}>
        <View style={profileDataStyled.back}>
          <View>
            <ProfileContainer />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <>
                  <Post
                    image={item.image}
                    pictureName={item.pictureName}
                    commentsCount={item.commentsCount}
                    location={item.location}
                  />
                </>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;

const profileDataStyled = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatar: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -150,
  },
  name: {
    alignSelf: "center",
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    paddingBottom: 24,
  },
  iconClose: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 15,
    bottom: 14,
    right: "-10%",
  },
  iconExit: {
    position: "absolute",
    bottom: 14,
    right: "-110%",
  },
  back: {
    top: "30%",
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
  },

  postContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 36,
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
  commentsIcon: {
    color: "#FF6C00",
    // backgroundColor: "#FF6C00",
    transform: [{ rotate: "260deg" }],
  },
  commentsCount: {
    color: "#212121",
    alignSelf: "center",
    marginLeft: 5,
    marginRight: 24,
  },
  location: {
    color: "#212121",
    marginLeft: 5,
    alignSelf: "center",
    textDecorationLine: "underline",
  },
});
