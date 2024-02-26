import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../Components/Header";
import SelectedEmployees from "../Components/SelectedEmployees";

const RecapScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedEmployees } = route.params || {};
  const [darkMode, setDarkMode] = useState(false);

  const enableLightMode = () => {
    setDarkMode(false);
  };

  const enableDarkMode = () => {
    setDarkMode(true);
  };

  const handleNavigateToTips = () => {
    navigation.navigate("Tips");
  };

  const textStyle = darkMode ? tw`text-white` : tw`text-black`;
  const buttonStyle = darkMode ? tw`bg-[#555555]` : tw`bg-[#FF6B4036]`;
  const iconContainerStyle = tw`rounded-full p-2`;
  const lightModeIconStyle = darkMode
    ? iconContainerStyle
    : [iconContainerStyle, tw`bg-white shadow-md`];
  const darkModeIconStyle = darkMode
    ? [iconContainerStyle, tw`bg-white shadow-md`]
    : iconContainerStyle;

  return (
    <SafeAreaView
      style={[tw`flex-1`, darkMode ? tw`bg-[#131313]` : tw`bg-white`]}
    >
      <ScrollView>
        <View>
          <Header />
          <Text style={[tw`ml-3 font-bold text-4xl w-60`, textStyle]}>
            Récapitulatif du service
          </Text>
          <View style={tw`flex-row justify-evenly mt-10`}>
            {/* Bouton salle */}
            <TouchableOpacity>
              <Text
                style={[tw`text-center font-semibold text-base`, textStyle]}
              >
                salle
              </Text>
            </TouchableOpacity>

            {/* Bouton cuisine */}
            <TouchableOpacity>
              <Text
                style={[tw`text-center font-semibold text-base`, textStyle]}
              >
                cuisine
              </Text>
            </TouchableOpacity>

            {/* Bouton service */}
            <TouchableOpacity>
              <Text
                style={[tw`text-center font-semibold text-base`, textStyle]}
              >
                service
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`mt-5`}>
            <Text style={[tw`text-center font-bold text-2xl`, textStyle]}>
              Employés sélectionnés
            </Text>
            <SelectedEmployees
              selectedEmployees={selectedEmployees}
              darkMode={darkMode}
            />
          </View>
          <View style={tw`flex items-center mt-5`}>
            <Text style={tw`text-center font-bold text-2xl text-[#FF6B40]`}>
              Service
            </Text>
          </View>
          <View style={tw`flex-row justify-center px-4 m-4`}>
            {/* Light mode button */}
            <TouchableOpacity onPress={enableLightMode}>
              <Ionicons
                name="sunny-outline"
                size={24}
                color={darkMode ? "white" : "#FF6B40"}
                style={lightModeIconStyle}
              />
            </TouchableOpacity>
            {/* Dark mode button */}
            <TouchableOpacity onPress={enableDarkMode}>
              <Ionicons
                name="moon-outline"
                size={24}
                color={!darkMode ? "black" : "#FF6B40"}
                style={darkModeIconStyle}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={[tw`flex self-center font-semibold text-2xl`, textStyle]}
          >
            {darkMode ? "Soir" : "Midi"}
          </Text>
        </View>
        <View style={tw`flex items-center mt-10`}>
          <TouchableOpacity
            onPress={handleNavigateToTips}
            style={tw`flex-row bg-[#FF6B4036] p-3 rounded-full w-95 items-center justify-center`}
          >
            <Text style={tw`flex text-[#FF6B40] font-semibold text-xl`}>
              Commencer le service !
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecapScreen;
