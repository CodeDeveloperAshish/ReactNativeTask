import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const BottomTabs = ({
  selectedTab,
  TabNo,
  setSelectedTab,
  Title,
  ActiveImage,
  DefaultImage,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedTab(TabNo)}
      className={` w-[25%]   items-center ${
        selectedTab == TabNo ? "mb-20" : "mb-0"
      }`}
    >
      <View
        className={`rounded-full bg-[#fff] ${
          selectedTab == TabNo ? "h-[70px] w-[75px]" : null
        }     justify-center items-center`}
      >
        <View
          className={`${
            selectedTab == TabNo ? "bg-[#1E222B]" : "bg-[#F8F9FB]"
          } rounded-full h-[56px] w-[56px] justify-center items-center`}
        >
          {selectedTab == TabNo ? (
            <Image
              className="h-5 w-5"
              resizeMode="contain"
              // style={{ tintColor: "black" }}
              source={ActiveImage}
            />
          ) : (
            <Image
              className="h-5 w-5"
              resizeMode="contain"
              // style={{ tintColor: "black" }}
              source={DefaultImage}
            />
          )}
        </View>
      </View>

      {selectedTab != TabNo && (
        <Text
          style={{ fontFamily: "Manrope-Medium" }}
          className="text-[12px] text-[#8891A5] -mt-3"
        >
          {Title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default BottomTabs;
