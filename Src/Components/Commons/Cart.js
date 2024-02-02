import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const Cart = ({ iconColor, badgeBorderColor }) => {
  const items = useSelector((store) => store.cart);
  const navigattion = useNavigation();

  const handleNextScreen = () => {
    navigattion.navigate("CartScreen");
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleNextScreen}
        style={{
          borderColor: badgeBorderColor ? badgeBorderColor : Colors.Primary,
        }}
        className="h-[24px] w-[24px] bg-[#F9B023] rounded-full absolute -top-2 left-[9px] z-10 justify-center items-center border-[2px] "
      >
        <Text className="text-[10px] text-white">{items.length}</Text>
      </TouchableOpacity>
      <Image
        className="w-[25px] h-[25px]"
        source={require("../../../assets/Icons/cart.png")}
        resizeMode="contain"
        style={{ tintColor: iconColor ? iconColor : "#fff" }}
      />
    </View>
  );
};

export default Cart;
