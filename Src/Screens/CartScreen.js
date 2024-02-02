import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Utils/Colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartTotal, removeFromCart } from "../Store";

const CartScreen = ({ navigation }) => {
  const items = useSelector((store) => store.cart);
  const bagTotal = useSelector(cartTotal);
  const deliveryCharges = 2.0;
  const TotalAmount = bagTotal + deliveryCharges;

  const [groupedItemsinBasket, setgroupedItemsinBasket] = useState([]);

  const dispatch = useDispatch();

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrease = (id) => {
    dispatch(removeFromCart({ id: id }));
  };

  const GetProducts = async () => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    setgroupedItemsinBasket(groupedItems);
  };

  useEffect(() => {
    GetProducts();
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-row  items-center px-6 mt-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: Colors.LightGray }}
          className=" w-[40px] h-[40px] rounded-full justify-center items-center"
        >
          <Entypo name="chevron-small-left" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "Manrope-Regular" }}
          className="text-[16px] text-[#1E222B] ml-6"
        >
          Shopping Cart ({Object.entries(groupedItemsinBasket).length})
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 250 }}
        className="px-6 mt-10"
      >
        {Object.entries(groupedItemsinBasket).map(([key, item]) => (
          <View key={key} className="flex-row w-full mt-5">
            <View className="flex-row w-[50%]">
              <Image
                width={40}
                height={40}
                className="rounded-md"
                source={{
                  uri: `${item[0].thumbnail}`,
                }}
                resizeMode="cover"
              />
              <View className="ml-5">
                <Text
                  style={{ fontFamily: "Manrope-Medium" }}
                  className="text-[14px] text-[#1E222B] "
                >
                  {item[0].title}
                </Text>
                <Text
                  style={{ fontFamily: "Manrope-Regular" }}
                  className="text-[14px] text-[#1E222B] "
                >
                  $ {item[0].price}
                </Text>
              </View>
            </View>
            <View className="flex-row  w-[50%] justify-end items-center">
              <TouchableOpacity
                onPress={() => handleDecrease(item[0].id)}
                style={{ backgroundColor: Colors.LightGray }}
                className=" w-[40px] h-[40px] rounded-full justify-center items-center"
              >
                {/* <Entypo name="chevron-small-left" size={24} color="black" /> */}
                <Text className="text-2xl">-</Text>
              </TouchableOpacity>
              <Text
                style={{ fontFamily: "Manrope-Medium" }}
                className="text-[14px] text-[#1E222B] mx-3"
              >
                {item.length}
              </Text>
              <TouchableOpacity
                onPress={() => handleIncrease(item[0])}
                style={{ backgroundColor: Colors.LightGray }}
                className=" w-[40px] h-[40px] rounded-full justify-center items-center"
              >
                {/* <Entypo name="chevron-small-left" size={24} color="black" /> */}
                <Text className="text-2xl">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className="p-2  w-full absolute -bottom-10">
        <View
          style={{ backgroundColor: Colors.LightGray }}
          className="w-full bg-red-400 h-[300px] rounded-t-[30px] p-6"
        >
          <View className="flex-row justify-between items-start">
            <Text
              style={{ fontFamily: "Manrope-Regular" }}
              className="text-[14px] text-[#616A7D]"
            >
              Subtotal
            </Text>
            <Text
              style={{ fontFamily: "Manrope-Medium" }}
              className="text-[14px] text-[#1E222B]"
            >
              ${bagTotal}
            </Text>
          </View>
          <View className="flex-row justify-between items-start mt-4">
            <Text
              style={{ fontFamily: "Manrope-Regular" }}
              className="text-[14px] text-[#616A7D]"
            >
              Delivery
            </Text>
            <Text
              style={{ fontFamily: "Manrope-Medium" }}
              className="text-[14px] text-[#1E222B]"
            >
              $2.00
            </Text>
          </View>
          <View className="flex-row justify-between items-start mt-4">
            <Text
              style={{ fontFamily: "Manrope-Regular" }}
              className="text-[14px] text-[#616A7D]"
            >
              Total
            </Text>
            <Text
              style={{ fontFamily: "Manrope-SemiBold" }}
              className="text-[14px] text-[#1E222B]"
            >
              ${TotalAmount}
            </Text>
          </View>

          <TouchableOpacity
            style={{ backgroundColor: Colors.Primary }}
            className="w-[327px] h-[56px] rounded-[20px] justify-center items-center mt-14"
          >
            <Text
              style={{ fontFamily: "Manrope-SemiBold" }}
              className="text-[16px] text-white"
            >
              Proceed To Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
