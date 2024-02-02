import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../../Store";
const ProductImageSlider = ({ productImages, productId, productName }) => {
  const { width } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);

  const Favourite = useSelector((state) => state.favourite);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const dispatch = useDispatch();

  const handleFavouriteAnimation = () => {
    // Add animation to the heart icon
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
    if (Favourite.includes(productId)) {
      dispatch(removeFromFavourite(productId));
      Alert.alert(
        "Notification",
        `Sad to see it go! ${productName} has been removed from your favorites list`
      );
    } else {
      dispatch(addToFavourite(productId));
      Alert.alert(
        "Congratulation",
        `You've successfully added ${productName} to your favorites list`
      );
    }
  };

  return (
    <View className="mt-5">
      <TouchableOpacity
        onPress={handleFavourite}
        className="w-[58px] h-[58px] bg-white absolute top-5 right-7 rounded-[20px] z-10 justify-center items-center"
      >
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
          }}
        >
          {Favourite.includes(productId) ? (
            <AntDesign name="heart" size={24} color="#FF0000" />
          ) : (
            <AntDesign name="hearto" size={24} color="#323743" />
          )}
        </Animated.View>
      </TouchableOpacity>

      <FlatList
        data={productImages}
        horizontal
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="h-[207px] bg-[#F8F9FB]" style={{ width: width }}>
            <Image
              width={width}
              height={207}
              source={{ uri: item }}
              resizeMode="cover"
            />
          </View>
        )}
        keyExtractor={(item) => item}
      />
      <View className="flex-row absolute bottom-4 left-6">
        {productImages.map((item, index) => {
          return (
            <View
              key={item}
              style={{
                backgroundColor:
                  currentIndex == index ? Colors.Secondary : "#E4E4E4",
              }}
              className="w-5 h-1 bg-black mr-1 rounded-full"
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default ProductImageSlider;
