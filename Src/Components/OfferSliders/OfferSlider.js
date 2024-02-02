import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const OfferSlider = () => {
  const Sliders = [
    {
      BannerUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/49739180081182.jpg",
      DiscountPercent: "50% OFF",
    },
    {
      BannerUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/49739180146718.jpg",
      DiscountPercent: "60% OFF",
    },
    {
      BannerUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/49739180277790.jpg",
      DiscountPercent: "70% OFF",
    },
    {
      BannerUrl:
        "https://assets.tatacliq.com/medias/sys_master/images/49739180343326.jpg",
      DiscountPercent: "75% OFF",
    },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Sliders}
        renderItem={({ item }) => (
          <View className="bg-[#F9B023] rounded-[16px] w-[269px] h-[123px] mr-5 ">
            <View className="flex-row  p-1 h-full w-full">
              <Image
                source={{
                  uri: `${item.BannerUrl}`,
                }}
                resizeMode="cover"
                className="w-28 h-full rounded-[16px]"
              />
              <View className=" justify-center items-center ml-5">
                <Text
                  className="text-white "
                  style={{ fontFamily: "Manrope-Regular", fontSize: 20 }}
                >
                  Get{"\n"}
                  <Text style={{ fontFamily: "Manrope-Bold", fontSize: 20 }}>
                    {item.DiscountPercent}
                    {"\n"}
                  </Text>
                  <Text className="text-[14px] ">on first 3 orders</Text>
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.BannerUrl}
      />
    </View>
  );
};

export default OfferSlider;
