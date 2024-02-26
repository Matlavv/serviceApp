import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import GiveATips from "../Components/GiveATips";
import Header from "../Components/Header";

const TipsScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView>
        <View>
          <Header />
          <Text style={tw`ml-3 font-bold text-4xl w-60`}>
            Ajouter un pourboire
          </Text>
        </View>
        <View style={tw`m-5`}>
          <GiveATips />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TipsScreen;
