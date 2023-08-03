import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={postsStyled.container}>
      <View style={postsStyled.bottomTab}>
        {/* <View style={postsStyled.bottomButtons}>
          <Text>1111111111</Text>
          <Text>2222222222</Text>
          <Text>3333333333</Text>
        </View> */}
      </View>
    </View>
  );
};

export default PostsScreen;

const postsStyled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bottomTab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
  },

  bottomButtons: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    paddingTop: 9,
    paddingBottom: 22,
    gap: 10,
    marginBottom: 12,
  },
});
