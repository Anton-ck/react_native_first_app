import { View, Text, StyleSheet } from "react-native";
import CreatePost from "../Components/CreatePost";
import TrashButton from "../Components/TrashButton";

const CreatePostsScreen = () => {
  return (
    <View style={createPostsStyled.container}>
      <CreatePost />
      <TrashButton />
    </View>
  );
};

export default CreatePostsScreen;

const createPostsStyled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
