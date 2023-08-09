import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Posts = () => {
  return (
    <>
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
      <View style={profileDataStyled.postContainer}>
        <Image
          source={require("../../assets/img/post1.jpeg")}
          style={{
            width: 343,
            height: 240,
            borderRadius: 8,
          }}
        />
        <Text style={profileDataStyled.pictureName}>Ліс</Text>
        <View style={profileDataStyled.infoBlock}>
          <View style={profileDataStyled.infoContainer}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={profileDataStyled.commentsCount}>0</Text>
          </View>
          <View style={profileDataStyled.infoContainer}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={profileDataStyled.location}>Ivano-Frankivs'k Region, Ukraine</Text>
          </View>
        </View>
      </View>
      <View style={profileDataStyled.postContainer}>
        <Image
          source={require("../../assets/img/post2.jpeg")}
          style={profileDataStyled.imageStyle}
        />
        <Text style={profileDataStyled.pictureName}>Захід на чорному морі</Text>
        <View style={profileDataStyled.infoBlock}>
          <View style={profileDataStyled.infoContainer}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={profileDataStyled.commentsCount}>0</Text>
          </View>
          <View style={profileDataStyled.infoContainer}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={profileDataStyled.location}>Cherkassy Region, Ukraine</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Posts;

const profileDataStyled = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 16,
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
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  imageStyle: {
    width: 343,
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
