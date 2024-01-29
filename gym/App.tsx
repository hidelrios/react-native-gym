import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { Loading } from "@components/Loading";
import { SignIn } from "@screens/SignIn";
import { StatusBar } from "react-native";
import { THEME } from "./src/theme";
import { Routes } from "@routes/index";

export default function App() {
  return (
    <NativeBaseProvider  theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </NativeBaseProvider>
  );
}