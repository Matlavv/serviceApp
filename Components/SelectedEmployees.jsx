import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

const SelectedEmployees = ({ selectedEmployees, darkMode }) => {
  const textStyle = darkMode ? tw`text-white` : tw`text-black`;
  const borderColor = darkMode ? tw`border-white` : tw`border-gray-300`;

  return (
    <ScrollView style={tw`h-70 mt-4`}>
      <View style={tw`flex items-center`}>
        {selectedEmployees.map((employee, index) => (
          <View
            key={index}
            style={[
              tw`flex-row items-center justify-between w-80 mt-2 px-6 py-3 border-b`,
              borderColor,
            ]}
          >
            <Ionicons
              name="person-outline"
              size={34}
              color="white"
              style={tw`bg-[#FF6B40] rounded-full p-2 shadow-xl shadow-orange-500`}
            />
            <Text
              style={[
                tw`text-lg flex-grow text-center font-bold mx-2`,
                textStyle,
              ]}
            >
              {employee.name}
            </Text>
            <Text style={tw`rounded-xl p-1 px-2 bg-gray-200 text-[#818181]`}>
              {employee.category}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SelectedEmployees;
