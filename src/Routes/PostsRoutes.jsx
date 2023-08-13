import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../../src/Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import LogoutBtn from "../Components/LogoutButton";

const Tab = createBottomTabNavigator();

export const PostsTab = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      // initialRouteName="PostsScreen"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingLeft: 60,
          paddingRight: 60,
          paddingBottom: 0,
        },
        tabBarBadgeStyle: { height: 99 },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarItemStyle: { ...styles.tabButtonWrapper },
        tabBarActiveBackgroundColor: "#FF6C00",
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogoutBtn />,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => <AntDesign name="plus" size={16} color={color} />,
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Posts");
                }}
                style={{ marginLeft: 16 }}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль",
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = {
  tabButtonWrapper: {
    borderRadius: 20,
    width: 70,
    height: 40,
    marginRight: 9,
    marginLeft: 9,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
};
