import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../Components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      <View>
        <Text style={tw`ml-3 font-bold text-4xl w-60`}>
          Qui travaille aujourd'hui ?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
