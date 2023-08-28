import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const TrashButton = ({ toogle, color, bcolor, del }) => {
  return (
    <TouchableOpacity
      style={[trashIconStyled.background, { backgroundColor: bcolor }]}
      disabled={toogle}
      onPress={del}
    >
      <Feather name="trash-2" size={24} color={color} />
    </TouchableOpacity>
  );
};

export default TrashButton;

const trashIconStyled = StyleSheet.create({
  background: {
    display: "flex",
    position: "absolute",
    bottom: 22,
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
