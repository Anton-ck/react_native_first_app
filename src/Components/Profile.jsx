import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { Feather, AntDesign, Fontisto, EvilIcons } from "@expo/vector-icons";
import BG from "../../assets/img/background.png";
import SvgXml from "./Close";
import LogoutBtn from "./LogoutButton";

const Profile = () => {
  return (
    <View style={profileDataStyled.container}>
      <ImageBackground source={BG} resizeMode="cover" style={profileDataStyled.backgroundImage}>
        <View style={profileDataStyled.back}>
          <View style={profileDataStyled.avatar}>
            <Image
              source={require("../../assets/img/ProfileImg/romanova.jpeg")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 16,
              }}
            />

            <View style={profileDataStyled.iconPlus}>
              <SvgXml />
            </View>
            <View style={profileDataStyled.iconExit}>
              <LogoutBtn />
            </View>
          </View>
          <Text style={profileDataStyled.name}>Natali Romanova</Text>
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
                <Feather name="message-circle" size={24} style={profileDataStyled.commentsIcon} />
                <Text style={profileDataStyled.commentsCount}>8</Text>
                <Feather name="thumbs-up" size={22} color="#FF6C00" />
                <Text style={profileDataStyled.commentsCount}>153</Text>
              </View>
              <View style={profileDataStyled.infoContainer}>
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <Text style={profileDataStyled.location}> Ukraine</Text>
              </View>
            </View>
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
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  name: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },
  iconPlus: {
    position: "absolute",
    color: "#BDBDBD",
    backgroundColor: "#fff",
    borderRadius: 15,
    bottom: 14,
    right: "-10%",
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
  iconExit: {
    position: "absolute",
    bottom: 14,
    right: "-110%",
  },
  back: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 78,
  },
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
