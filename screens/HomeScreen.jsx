import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import CategoryFilter from "../Components/CategoryFilter";
import Header from "../Components/Header";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("salle");
  const [selectedEmployees, setSelectedEmployees] = useState({});
  const navigation = useNavigation();

  const handleUserSelectionChange = (newData) => {
    setSelectedEmployees(newData);
  };

  const handleNavigateToRecap = () => {
    const allSelectedEmployees = Object.values(selectedEmployees)
      .flat()
      .filter((employee) => employee.checked);
    navigation.navigate("Recap", { selectedEmployees: allSelectedEmployees });
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView>
        <View>
          <Header />
          <Text style={tw`ml-3 font-bold text-4xl w-60`}>
            Qui travaille aujourd'hui ?
          </Text>
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onUserSelectionChange={handleUserSelectionChange}
          />
        </View>
        <View style={tw`flex items-center mt-5`}>
          <TouchableOpacity
            onPress={handleNavigateToRecap}
            style={tw`flex-row bg-[#FF6B4036] p-3 rounded-full w-95 items-center justify-center`}
          >
            <Text style={tw`flex text-[#FF6B40] font-semibold text-xl`}>
              Suivant
            </Text>
            <Ionicons name="arrow-forward" size={24} color="#FF6B40" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
