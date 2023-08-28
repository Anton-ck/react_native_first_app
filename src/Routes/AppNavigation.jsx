import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import RegScreen from "../../src/Screens/RegistrationScreen";
import LoginScreen from "../../src/Screens/LoginScreen";
import { PostsTab } from "../Routes/PostsRoutes";
import CommentsScreen from "../Screens/CommentsScreen";
import MapScreen from "../Screens/MapScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
      }}
      initialRouteName="Login"
      // initialRouteName="Comments"
    >
      <Stack.Screen
        name="Registration"
        component={RegScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostsTab"
        component={PostsTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={navigation.goBack} style={{ marginLeft: 16 }}>
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Мапа",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={navigation.goBack} style={{ marginLeft: 16 }}>
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
