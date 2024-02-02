import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import Cart from "../Components/Commons/Cart";
import ProductRating from "../Components/Products/ProductRating";
import ProductImageSlider from "../Components/Products/ProductImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavourite, removeFromFavourite } from "../Store";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productDetail } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-row justify-between items-center px-6 mt-5">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: Colors.LightGray }}
            className=" w-[40px] h-[40px] rounded-full justify-center items-center"
          >
            <Entypo name="chevron-small-left" size={24} color="black" />
          </TouchableOpacity>
          <Cart iconColor="black" badgeBorderColor="white" />
        </View>

        {/* ProducName and Rating,Reviews */}
        <View className="px-6 mt-4">
          <Text
            className="text-[#1E222B]"
            style={{ fontFamily: "Manrope-Regular", fontSize: 50 }}
          >
            {productDetail.title}
          </Text>
          <View className="flex-row items-center mt-2">
            <ProductRating Rating={productDetail.rating} />
            <Text
              style={{ fontFamily: "Manrope-Regular" }}
              className="text-[14px] text-[#A1A1AB] ml-1"
            >
              {productDetail.stock} Reviews
            </Text>
          </View>
        </View>

        {/* ProducImagetSlider */}
        <ProductImageSlider
          productImages={productDetail.images}
          productId={productDetail.id}
          productName={productDetail.title}
        />

        {/* ProducPrice and Discounts */}
        <View className="px-6 flex-row mt-8 items-center">
          <Text
            style={{ fontFamily: "Manrope-Bold", color: Colors.Primary }}
            className="text-[16px]"
          >
            ${productDetail.price}
          </Text>
          <View
            className="rounded-full w-[84px] h-[24px] justify-center items-center ml-4"
            style={{ backgroundColor: Colors.Primary }}
          >
            <Text
              style={{ fontFamily: "Manrope-Regular" }}
              className="text-[12px] text-white"
            >
              ${productDetail.discountPercentage} OFF
            </Text>
          </View>
        </View>

        {/* Product Add To Cart and Buy Now Buttons*/}
        <View className="px-6 flex-row mt-8 w-full ">
          <TouchableOpacity
            onPress={handleAddToCart}
            style={{ borderColor: Colors.Primary }}
            className="w-[143px] h-[56px] border rounded-[20px] justify-center items-center"
          >
            <Text
              style={{
                fontFamily: "Manrope-SemiBold",
                color: Colors.Primary,
              }}
              className="text-[14px]"
            >
              Add To Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: Colors.Primary }}
            className="w-[169px] h-[56px]  rounded-[20px] justify-center items-center ml-8"
          >
            <Text
              style={{
                fontFamily: "Manrope-SemiBold",
              }}
              className="text-[14px] text-white"
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>

        {/* ProducDesciption */}
        <View className="px-6 mt-4">
          <Text
            style={{ fontFamily: "Manrope-Regular" }}
            className="text-[16px] text-[#1E222B] mt-5"
          >
            Details
          </Text>

          <Text
            style={{ fontFamily: "Manrope-Regular", lineHeight: 24 }}
            className="text-[16px] text-[#8891A5] mt-3"
          >
            {productDetail.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
