import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const GiveATips = () => {
  const [tipAmount, setTipAmount] = useState("");

  const addTip = (amount) => {
    const newAmount = parseFloat(tipAmount || 0) + amount;
    setTipAmount(newAmount.toString());
  };

  return (
    <View>
      <View style={tw`flex`}>
        <Text style={tw`text-[#FF6B40] font-semibold text-base`}>
          Nom de table
        </Text>
        <TextInput
          placeholder="cerise"
          style={tw`flex bg-[#F4F4F4] w-90 items-center justify-center rounded-xl p-2 px-4 mt-2 mb-4`}
        />
        <Text style={tw`text-[#FF6B40] font-semibold text-base`}>
          Montant du pourboire
        </Text>
        <TextInput
          placeholder="3"
          value={tipAmount}
          onChangeText={setTipAmount}
          keyboardType="numeric"
          style={tw`flex bg-[#F4F4F4] w-90 items-center justify-center rounded-xl p-2 px-4 mt-2 mb-4`}
        />
      </View>
      <View style={tw`flex-row justify-evenly mt-3`}>
        <TouchableOpacity onPress={() => addTip(0.5)}>
          <Text
            style={tw`text-center text-base text-[#FF6B40] border-2 border-[#FF6B40] rounded-full p-1 px-4`}
          >
            0.50
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addTip(1.0)}>
          <Text
            style={tw`text-center text-base text-[#FF6B40] border-2 border-[#FF6B40] rounded-full p-1 px-4`}
          >
            1.00
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addTip(2.0)}>
          <Text
            style={tw`text-center text-base text-[#FF6B40] border-2 border-[#FF6B40] rounded-full p-1 px-4`}
          >
            2.00
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex items-center mt-7`}>
        <TouchableOpacity
          style={tw`flex-row bg-[#FF6B4036] p-3 rounded-full w-95 items-center justify-center`}
        >
          <Text style={tw`flex text-[#FF6B40] font-semibold text-xl`}>
            Ajouter le pourboire
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GiveATips;
