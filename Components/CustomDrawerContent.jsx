import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={tw`bg-white flex-1`}
    >
      <View style={tw`flex-grow p-5 mt-20`}>
        <View style={tw`border-b border-gray-300 w-60`}>
          <DrawerItem
            label="Service"
            icon={() => (
              <Ionicons name="alert-outline" size={24} color="black" />
            )}
            labelStyle={tw`text-lg font-bold`}
            onPress={() => props.navigation.navigate("Service")}
          />
        </View>
        <DrawerItem
          label="Admin"
          icon={() => (
            <Ionicons name="person-outline" size={24} color="black" />
          )}
          labelStyle={tw`text-lg font-bold`}
          onPress={() => props.navigation.navigate("Admin")}
        />
      </View>

      {/* Bottom buttons */}
      <View style={tw`p-5 border-t border-gray-300`}>
        <TouchableOpacity style={tw`flex-row items-center p-4`}>
          <Ionicons
            name="pencil-outline"
            size={24}
            color="black"
            style={tw`mr-2`}
          />
          <Text style={tw`flex-1 text-lg`}>Modifier le service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center p-4`}>
          <Ionicons
            name="exit-outline"
            size={24}
            color="red"
            style={tw`mr-2`}
          />
          <Text style={tw`flex-1 text-lg text-red-600`}>Fermer le service</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
