import "react-native-gesture-handler";
import { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import React, { useState } from "react";
import HomeScreen from "./Src/Screens/BottomTabsScreens/HomeScreen";
import ProductDetailScreen from "./Src/Screens/ProductDetailScreen";
import CartScreen from "./Src/Screens/CartScreen";
import { Provider } from "react-redux";
import Store from "./Src/Store";
import MainScreen from "./Src/Screens/MainScreen";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("./assets/Fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/Fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("./assets/Fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/Fonts/Manrope-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createStackNavigator();
  const ScreenNavigatorStyle = {
    headerShown: false,
    headerStyle: {
      backgroundColor: "red",
    },
  };

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Provider store={Store}>
        <Stack.Navigator
          initialRouteName="MainScreen"
          screenOptions={ScreenNavigatorStyle}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
