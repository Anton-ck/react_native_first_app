import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params.locationCoords.coords;
  const { pictureName } = route.params;

  return (
    <View>
      <MapView
        style={createPostStyled.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="terrain"
        minZoomLevel={15}
        showsUserLocation={true}
      >
        <Marker coordinate={{ latitude, longitude }} title={pictureName} />
      </MapView>
    </View>
  );
};

export default MapScreen;

const createPostStyled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
