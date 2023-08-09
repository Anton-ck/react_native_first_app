import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LogoutBtn = () => {
  const navigation = useNavigation();
  return (
    <MaterialIcons
      name="logout"
      size={26}
      color="#BDBDBD"
      style={{ marginRight: 16 }}
      onPress={() => {
        navigation.navigate("Login");
      }}
    />
  );
};

export default LogoutBtn;
