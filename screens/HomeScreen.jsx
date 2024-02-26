import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
