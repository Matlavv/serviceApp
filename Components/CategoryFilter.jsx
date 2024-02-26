import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const CategoryFilter = () => {
  return (
    <SafeAreaView>
      <View style={tw`flex`}>
        <Text style={tw`text-[#999999] m-3 text-base`}></Text>
      </View>
    </SafeAreaView>
  );
};

export default CategoryFilter;
