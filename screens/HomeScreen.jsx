import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import CategoryFilter from "../Components/CategoryFilter";
import Header from "../Components/Header";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("salle");

  return (
    <SafeAreaView>
      <View>
        <Header />
        <Text style={tw`ml-3 font-bold text-4xl w-60`}>
          Qui travaille aujourd'hui ?
        </Text>
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      <View style={tw`flex items-center mt-5`}>
        <TouchableOpacity
          style={tw`flex-row bg-[#FF6B4036] p-3 rounded-full w-95 items-center justify-center`}
        >
          <Text style={tw`flex text-[#FF6B40] font-semibold text-xl`}>
            Suivant
          </Text>
          <Ionicons name="arrow-forward" size={24} color="#FF6B40" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
