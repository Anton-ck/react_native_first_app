import { View, Text, StyleSheet } from "react-native";
import Posts from "../Components/Posts";

const PostsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Posts />
    </View>
  );
};

export default PostsScreen;
