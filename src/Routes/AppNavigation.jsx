import { createStackNavigator } from "@react-navigation/stack";

import RegScreen from "../../src/Screens/RegistrationScreen";
import LoginScreen from "../../src/Screens/LoginScreen";
import { PostsTab } from "../Routes/PostsRoutes";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
      }}
      initialRouteName="Login"
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
      {/* <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerShown: true,

          headerStyle: {
            height: 99,
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: "Roboto_500Medium",
            lineHeight: 22,
            textAlign: "center",
            paddingTop: 11,
            paddingBottom: 11,
            paddingLeft: 48,
            paddingRight: 49,
          },
          headerRight: () => <LogoutBtn />,
        }}
      /> */}
      <Stack.Screen
        name="PostsTab"
        component={PostsTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
