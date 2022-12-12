import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import * as SplashScreen from "expo-splash-screen";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };
    if (fontsLoaded) hideSplashScreen();
  }, [fontsLoaded]);
  return (
    <>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <Loading />}
    </>
  );
}
