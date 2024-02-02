import React, { useState } from "react";
import BottomNavigator from "../Components/BottomNavigator/BottomNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./BottomTabsScreens/HomeScreen";
import CategoryScreen from "./BottomTabsScreens/CategoryScreen";
import FavouriteScreen from "./BottomTabsScreens/FavouriteScreen";
import MoreScreen from "./BottomTabsScreens/MoreScreen";

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SafeAreaView className="flex-1">
      {/* Display Home */}
      {selectedTab == 0 && <HomeScreen />}
      {/* Display Category */}
      {selectedTab == 1 && <CategoryScreen />}
      {/* Display Favorite */}
      {selectedTab == 2 && <FavouriteScreen />}
      {/* Display More */}

      {selectedTab == 3 && <MoreScreen />}

      <BottomNavigator
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
