import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const UserList = ({ selectedCategory, onSelectionChange }) => {
  const initialData = {
    salle: [
      { id: 1, name: "Aaron James", checked: false, category: "salle" },
      { id: 2, name: "Amanda Wallace", checked: false, category: "salle" },
      { id: 3, name: "Angela Danger", checked: false, category: "salle" },
      { id: 4, name: "Abella White", checked: false, category: "salle" },
      { id: 5, name: "Darlene Robertson", checked: false, category: "salle" },
      { id: 6, name: "Fred Davis", checked: false, category: "salle" },
    ],
    cuisine: [
      { id: 1, name: "Paul", checked: false, category: "cuisine" },
      { id: 2, name: "Mia", checked: false, category: "cuisine" },
      { id: 3, name: "Miaouss", checked: false, category: "cuisine" },
      { id: 4, name: "Rome", checked: false, category: "cuisine" },
      { id: 5, name: "Melo", checked: false, category: "cuisine" },
      { id: 6, name: "Fredo", checked: false, category: "cuisine" },
    ],
    service: [
      { id: 1, name: "Pika", checked: false, category: "service" },
      { id: 2, name: "Mel", checked: false, category: "service" },
      { id: 3, name: "Vatira", checked: false, category: "service" },
      { id: 4, name: "Zen", checked: false, category: "service" },
      { id: 5, name: "Hello", checked: false, category: "service" },
      { id: 6, name: "Julius", checked: false, category: "service" },
    ],
  };

  const [data, setData] = useState(initialData);

  const handlePress = (categoryId, id) => {
    const newData = { ...data };
    const categoryData = newData[categoryId];
    const itemIndex = categoryData.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      categoryData[itemIndex].checked = !categoryData[itemIndex].checked;
      setData(newData);
      onSelectionChange(newData);
    }
  };

  const filteredData = data[selectedCategory] || [];

  return (
    <ScrollView
      contentContainerStyle={tw`items-center justify-center flex-grow`}
    >
      {filteredData.map((item, index) => (
        <View
          key={index}
          style={tw`flex-row items-center justify-between w-95 mt-2 px-6 py-3 bg-white ${
            item.checked ? "border border-orange-500" : "border border-gray-200"
          } rounded-xl self-center`}
        >
          <View style={tw`flex-row items-center`}>
            <Ionicons
              name="person-outline"
              size={34}
              color="white"
              style={tw`bg-[#FF6B40] rounded-full p-2 shadow-xl shadow-orange-500`}
            />
            <Text style={tw`text-lg flex-grow text-center font-bold mx-2`}>
              {item.name}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handlePress(selectedCategory, item.id)}
          >
            {item.checked ? (
              <Ionicons name="checkbox" size={24} color="#FF6B40" />
            ) : (
              <View
                style={tw`w-6 h-6 border border-gray-300 rounded-lg`}
              ></View>
            )}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserList;
