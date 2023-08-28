import { View, Text, Image, StyleSheet } from "react-native";

const ProfileContainer = () => (
  <View style={profileStyled.profileContainer}>
    <Image
      source={require("../../assets/img/ProfileImg/romanova.jpeg")}
      style={profileStyled.profileAvatar}
    />
    <View style={profileStyled.profileTextContainer}>
      <Text style={profileStyled.profileName}>Natali Romanova</Text>
      <Text style={profileStyled.profileEmail}>email@example.com</Text>
    </View>
  </View>
);

export default ProfileContainer;

const profileStyled = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 16,
    paddingBottom: 20,
  },
  profileAvatar: { width: 60, height: 60, borderRadius: 16 },
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
});
