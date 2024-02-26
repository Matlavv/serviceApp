import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import UserList from "./UserList";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const getButtonStyle = (category) => {
    return category === selectedCategory
      ? tw`bg-[#E9E9E9] px-5 py-1 rounded-lg` // Style for selected button
      : tw`px-5 py-1`; // Style for non selected button
  };

  const getTextStyle = (category) => {
    return category === selectedCategory
      ? tw`text-center text-black font-bold text-base`
      : tw`text-center text-gray-500 font-semibold text-base`;
  };

  return (
    <SafeAreaView>
      <View style={tw`flex`}>
        <View style={tw`flex-row justify-evenly mt-5`}>
          {/* Bouton salle */}
          <TouchableOpacity
            style={getButtonStyle("salle")}
            onPress={() => setSelectedCategory("salle")}
          >
            <Text style={getTextStyle("salle")}>salle</Text>
          </TouchableOpacity>

          {/* Bouton cuisine */}
          <TouchableOpacity
            style={getButtonStyle("cuisine")}
            onPress={() => setSelectedCategory("cuisine")}
          >
            <Text style={getTextStyle("cuisine")}>cuisine</Text>
          </TouchableOpacity>

          {/* Bouton service */}
          <TouchableOpacity
            style={getButtonStyle("service")}
            onPress={() => setSelectedCategory("service")}
          >
            <Text style={getTextStyle("service")}>service</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-5`}>
          <UserList selectedCategory={selectedCategory} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryFilter;
