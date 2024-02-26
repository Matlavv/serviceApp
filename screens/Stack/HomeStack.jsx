import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../HomeScreen";
import RecapScreen from "../RecapScreen";
import TipsScreen from "../TipsScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recap" component={RecapScreen} />
      <Stack.Screen name="Tips" component={TipsScreen} />
    </Stack.Navigator>
  );
};
