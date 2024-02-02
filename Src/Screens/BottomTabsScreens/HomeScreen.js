import { View, Text, ScrollView } from "react-native";
import BottomNavigator from "../../Components/BottomNavigator/BottomNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import SearchBar from "../../Components/SearchBar/SearchBar";
import OfferSlider from "../../Components/OfferSliders/OfferSlider";
import Products from "../../Components/Products/Products";
import Heading from "../../Components/Commons/Heading";
import Cart from "../../Components/Commons/Cart";
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80, backgroundColor: "#fff" }}
        className="flex-1 "
        showsVerticalScrollIndicator={false}
      >
        <View className="h-[270px] w-full bg-[#2A4BA0] px-6 pt-10">
          <View className="flex-row justify-between items-center ">
            <Text
              style={{ fontFamily: "Manrope-SemiBold" }}
              className="text-[22px] text-white"
            >
              Hey, Rahul
            </Text>
            <Cart />
          </View>
          {/* SearchBar */}
          <SearchBar />
          {/* Location */}
          <View className="flex-row justify-between mt-8">
            <View>
              <Text
                style={{ fontFamily: "Manrope-Bold" }}
                className="text-[#B2BBCE] text-[11px]"
              >
                DELIVERY TO
              </Text>

              <View className="flex-row items-center mt-1 ">
                <Text
                  style={{ fontFamily: "Manrope-Medium" }}
                  className="text-[14px] text-white mr-2"
                >
                  Green Way 3000, Sylhet
                </Text>
                <Entypo name="chevron-small-down" size={24} color="#B2BBCE" />
              </View>
            </View>

            <View>
              <Text
                style={{ fontFamily: "Manrope-Bold" }}
                className="text-[#B2BBCE] text-[11px]"
              >
                WITHIN
              </Text>
              <View className="flex-row items-center mt-1 ">
                <Text
                  style={{ fontFamily: "Manrope-Medium" }}
                  className="text-[14px] text-white mr-2"
                >
                  1 hour
                </Text>
                <Entypo name="chevron-small-down" size={24} color="#B2BBCE" />
              </View>
            </View>
          </View>
        </View>

        <View className="flex-1 p-6">
          {/* OfferSlider */}
          <OfferSlider />
          {/* Heading*/}
          <Heading Heading="Recommended" />
          {/* Products */}
          <Products />
          {/* </View> */}
        </View>
      </ScrollView>
      <BottomNavigator />
    </SafeAreaView>
  );
};

export default HomeScreen;
