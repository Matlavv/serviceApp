import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const Header = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <SafeAreaView>
      <View style={tw`flex`}>
        <Text style={tw`text-[#999999] m-3 text-base`}>{dateString}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
