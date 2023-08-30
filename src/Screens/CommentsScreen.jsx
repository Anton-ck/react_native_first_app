import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// const DATA = [
//   {
//     id: "1",
//     image: require("../../assets/img/post2.jpeg"),
//     avatarOwner: require("../../assets/img/ProfileImg/romanova.jpeg"),
//     avatarGuest: require("../../assets/img/commentAvatar.jpg"),
//     commentOwner: [
//       {
//         comment:
//           "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
//       },
//     ],
//     commentGuest: [],
//   },
// ];

const Post = () => {
  return (
    <>
      <View style={commentsStyled.container}>
        <View style={commentsStyled.postContainer}>
          <Image
            source={require("../../assets/img/post2.jpeg")}
            style={commentsStyled.imageStyle}
          />

          <View style={commentsStyled.commentContainer}>
            <Image
              source={require("../../assets/img/commentAvatar.jpg")}
              style={[commentsStyled.avatarImage, { marginRight: 16 }]}
            />
            <View style={commentsStyled.commentText}>
              <Text>
                Really love your most recent photo. I’ve been trying to capture the same thing for a
                few months and would love some tips!
              </Text>
              <Text style={[commentsStyled.textDate, { textAlign: "right" }]}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>

          <View style={commentsStyled.commentContainer}>
            <View style={commentsStyled.commentText}>
              <Text>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend
                to get a bit sharper images.
              </Text>
              <Text style={[commentsStyled.textDate, { textAlign: "left" }]}>
                09 червня, 2020 | 09:14
              </Text>
            </View>
            <Image
              source={require("../../assets/img/ProfileImg/romanova.jpeg")}
              style={[commentsStyled.avatarImage, { marginLeft: 16 }]}
            />
          </View>

          <View style={commentsStyled.commentContainer}>
            <Image
              source={require("../../assets/img/commentAvatar.jpg")}
              style={[commentsStyled.avatarImage, { marginRight: 16 }]}
            />
            <View style={commentsStyled.commentText}>
              <Text>Thank you! That was very helpful!</Text>
              <Text style={[commentsStyled.textDate, { textAlign: "right" }]}>
                09 червня, 2020 | 09:20
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={commentsStyled.commentInputContainer}>
        <TextInput style={commentsStyled.commentTextInput} placeholder="Коментувати..."></TextInput>
        <Ionicons name="ios-arrow-up-circle" size={34} style={commentsStyled.iconCommentInput} />
      </View>
    </>
  );
};

const CommentsScreen = () => {
  return (
    <View style={commentsStyled.containerCommentsScreen}>
      <Post />
    </View>
  );
};

export default CommentsScreen;

const commentsStyled = StyleSheet.create({
  containerCommentsScreen: { backgroundColor: "#fff", flex: 1 },
  container: {
    flex: 1,
    position: "absolute",

    height: "100%",
    alignSelf: "center",
  },

  postContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    marginTop: 32,
    marginBottom: 36,
    marginHorizontal: 16,
  },
  commentContainer: { display: "flex", flexDirection: "row", marginTop: 32 },
  avatarImage: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  imageStyle: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  commentText: {
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 299,
    padding: 16,
  },
  textDate: {
    marginTop: 8,
    color: "#BDBDBD",
    fontFamily: "Roboto_400Regular",
    fontSize: 10,
  },
  commentInputContainer: {
    position: "absolute",
    bottom: -16,
    width: "100%",
    marginHorizontal: 16,
    alignSelf: "center",
  },
  commentTextInput: {
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 18,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    marginHorizontal: 16,
  },
  iconCommentInput: { color: "#FF6C00", right: 18, bottom: "50%", alignSelf: "flex-end" },
});
