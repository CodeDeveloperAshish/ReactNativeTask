import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BottomTabs from "./BottomTabs";
const BottomNavigator = ({ selectedTab, setSelectedTab }) => {
  return (
    <View className="bg-[#F8F9FB] absolute bottom-0 h-20 w-full flex-row   items-center  justify-center ">
      <BottomTabs
        Title="Home"
        TabNo={0}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        DefaultImage={require("../../../assets/Icons/homeDefault.png")}
        ActiveImage={require("../../../assets/Icons/homeActive.png")}
      />
      <BottomTabs
        Title="Category"
        TabNo={1}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        DefaultImage={require("../../../assets/Icons/defaultCategory.png")}
        ActiveImage={require("../../../assets/Icons/Category.png")}
      />
      <BottomTabs
        Title="Favourite"
        TabNo={2}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        DefaultImage={require("../../../assets/Icons/defaultFavourite.png")}
        ActiveImage={require("../../../assets/Icons/activeFavourite.png")}
      />
      <BottomTabs
        Title="More"
        TabNo={3}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        DefaultImage={require("../../../assets/Icons/moreDefault.png")}
        ActiveImage={require("../../../assets/Icons/moreActive.png")}
      />
    </View>
  );
};

export default BottomNavigator;
