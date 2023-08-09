import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const TrashButton = () => {
  return (
    <View style={trashIconStyled.background}>
      <Feather name="trash-2" size={24} color="#BDBDBD" />
    </View>
  );
};

export default TrashButton;

const trashIconStyled = StyleSheet.create({
  background: {
    display: "flex",
    // marginTop: 120,
    marginBottom: 34,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
