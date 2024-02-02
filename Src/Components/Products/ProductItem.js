import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import React, { useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { addToCart, addToFavourite, removeFromFavourite } from "../../Store";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ product }) => {
  const Favourite = useSelector((state) => state.favourite);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleFavouriteAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleFavourite = () => {
    handleFavouriteAnimation();
    if (Favourite.includes(product.id)) {
      dispatch(removeFromFavourite(product.id));
      Alert.alert(
        "Notification",
        `Sad to see it go! ${product.title} has been removed from your favorites list`
      );
    } else {
      dispatch(addToFavourite(product.id));
      Alert.alert(
        "Congratulation",
        `You've successfully added ${product.title} to your favorites list`
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetailScreen", {
          productDetail: product,
        })
      }
      className="h-[194px] w-[47%]  mb-5 bg-[#F8F9FB] rounded-[12px]"
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#ffffff7c",
          height: 35, // Adjust the height as needed
          width: 35, // Adjust the width as needed
          borderRadius: 24, // Make it half of the height to create a circle
          position: "absolute",
          left: 10,
          top: 10,
          zIndex: 10,
          justifyContent: "center",
          alignItems: "center",
          // Apply the opacity to create a fade-in effect
        }}
        onPress={handleFavourite}
        className="bg-[#ffffff7c] h-8 w-8 rounded-full absolute left-2 top-2 z-10 justify-center items-center"
      >
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
          }}
        >
          {Favourite.includes(product.id) ? (
            <AntDesign name="heart" size={24} color="#FF0000" />
          ) : (
            <AntDesign name="hearto" size={24} color="#323743" />
          )}
        </Animated.View>
      </TouchableOpacity>
      <Image
        source={{
          uri: `${product.thumbnail}`,
        }}
        resizeMode="cover"
        className="w-full h-28 rounded-t-[16px]"
      />
      <View className="mt-6 px-2 flex-row items-center justify-between">
        <View>
          <Text
            style={{ fontFamily: "Manrope-SemiBold" }}
            className="text-[14px]"
          >
            ${product.price}
          </Text>
          <Text
            style={{ fontFamily: "Manrope-Regular" }}
            className="text-[12px]"
          >
            {product.title.substr(0, 15)}
          </Text>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
          <AntDesign name="pluscircle" size={24} color="#2A4BA0" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
