import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

import TrashButton from "../Components/TrashButton";

const CreatePost = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [photoName, setPhotoName] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const resetState = () => {
    setPhoto(null);
    setPhotoName(null);
    setLocationName(null);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={createPostStyled.premissionText}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePhoto = async () => {
    if (photo || location !== null) {
      setPhoto(null);
      setLocation(null);
      return;
    } else {
      setIsLoading(true);
      const photo = await camera.takePictureAsync();
      const location = await Location.getCurrentPositionAsync();

      setPhoto(photo.uri);
      setLocation(location);
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    console.log(`${photoName} ${locationName}`);
    navigation.navigate("Posts", { photo, photoName, location, locationName });
    resetState();
  };

  const deletePhoto = () => resetState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={createPostStyled.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={-100}
        >
          {isLoading ? (
            <View style={createPostStyled.loaderContainer}>
              <Text style={createPostStyled.loaderText}>Робимо ваше фото 😁</Text>
              <ActivityIndicator size="large" color="#FF6C00" />
            </View>
          ) : (
            <Camera style={createPostStyled.camera} ref={setCamera}>
              <View style={createPostStyled.photoBlock}>
                {photo && <Image source={{ uri: photo }} style={createPostStyled.photo} />}
                <TouchableOpacity
                  style={
                    photo
                      ? [createPostStyled.ellipse, createPostStyled.ellipsePhoto]
                      : createPostStyled.ellipse
                  }
                  onPress={takePhoto}
                >
                  <FontAwesome name="camera" size={18} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
            </Camera>
          )}

          <Text style={createPostStyled.uploadPhoto}>
            {photo ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <TextInput
            style={createPostStyled.postInput}
            placeholder="Назва..."
            value={photoName}
            onChangeText={setPhotoName}
          />
          <View>
            <TextInput
              style={[createPostStyled.postInputPlace, createPostStyled.postInput]}
              placeholder="Місцевість..."
              value={locationName}
              onChangeText={setLocationName}
            />

            <Feather name="map-pin" size={24} style={createPostStyled.mapIcon} />
          </View>
          <Pressable
            onPress={handleSubmit}
            style={() => [
              {
                backgroundColor: photo && photoName && locationName ? "#FF6C00" : "#F6F6F6",
              },

              createPostStyled.button,
            ]}
            disabled={photo && photoName && locationName ? false : true}
          >
            <Text
              style={
                photo && photoName && locationName
                  ? [createPostStyled.buttonTextCreate, { color: "#fff" }]
                  : createPostStyled.buttonTextCreate
              }
            >
              Опубліковати
            </Text>
          </Pressable>
          {photo && photoName && locationName ? (
            <TrashButton toogle={false} color="#FFFFFF" bcolor="#FF6C00" del={deletePhoto} />
          ) : (
            <TrashButton toogle={true} color="#BDBDBD" bcolor="#F6F6F6" />
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;

const createPostStyled = StyleSheet.create({
  premissionText: {
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
  },
  photoBlock: {
    justifyContent: "center",
    width: "100%",
    height: 240,

    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
  },
  photo: {
    position: "relative",
    height: "100%",
  },
  ellipse: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  ellipsePhoto: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  camera: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 240,
    marginTop: 32,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 240,
    marginTop: 32,
    borderRadius: 8,
    borderWidth: 1,
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
    height: 50,
    borderColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  postInputPlace: {
    paddingLeft: 28,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 32,
    borderRadius: 100,
  },

  buttonTextCreate: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  mapIcon: {
    position: "absolute",
    top: "40%",
    color: "#EBEBEB",
  },

  loaderText: {
    textAlign: "center",
    fontFamily: "Roboto_300Light",
    fontSize: 20,
    marginBottom: 15,
  },
});
