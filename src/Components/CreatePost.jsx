import { View, Text, TextInput, StyleSheet, Dimensions, Pressable } from "react-native";

import { FontAwesome, Feather } from "@expo/vector-icons";
import TrashIcon from "./TrashButton";
import LogoutBtn from "./LogoutButton";

const CreatePost = () => {
  return (
    <View style={createPostStyled.container}>
      <View style={createPostStyled.photoBlock}>
        {/* <Ionicons
          name="ellipse"
          size={60}
          color="#FFF"
          style={{
            position: "absolute",
            top: "50%",
            transform: [{ translateY: -Dimensions.get("window").width * 0.1 }],
          }}
        /> */}
        <View style={createPostStyled.ellipse}>
          <FontAwesome
            name="camera"
            size={18}
            color="#BDBDBD"
            style={
              {
                // position: "relative",
                // top: -6,
                // left: -1,
              }
            }
          />
        </View>
      </View>
      <Text style={createPostStyled.uploadPhoto}>Завантажте фото</Text>
      <TextInput
        style={createPostStyled.postInput}
        placeholder="Назва..."
        inlineImageLeft="./img/ProfileImg/romanova.png"
      />
      <View style={{ position: "relative" }}>
        <TextInput
          style={[createPostStyled.postInputPlace, createPostStyled.postInput]}
          placeholder="Місцевість..."
        />
        <Feather
          name="map-pin"
          size={24}
          color="#EBEBEB"
          style={{ position: "absolute", top: "40%" }}
        />
      </View>
      <Pressable
        // onPress={handleSubmit}
        style={({ pressed }) => [
          //   {
          //     backgroundColor: pressed ? "#ff6a006c" : "F6F6F6",
          //   },
          createPostStyled.button,
        ]}
      >
        <Text style={createPostStyled.buttonTextCreate}>Опубліковати</Text>
      </Pressable>
    </View>
  );
};

export default CreatePost;

const createPostStyled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 16,
    marginRight: 16,
  },
  photoBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 360,
    height: 240,
    marginTop: 32,

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
  },
  ellipse: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  uploadPhoto: {
    marginTop: 8,
    marginBottom: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  postInput: {
    marginTop: 16,
    position: "relative",
    width: 343,
    height: 50,
    borderColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  postInputPlace: {
    paddingLeft: 28,
  },
  button: {
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,

    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  buttonTextCreate: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
