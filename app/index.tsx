import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView edges={["top"]} className="bg-red-400 px-3 h-full">
      <Text>index</Text>
    </SafeAreaView>
  );
}
