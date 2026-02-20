import { Stack } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios_from_right",
          // contentStyle: {
          //   backgroundColor: isDark ? "#121212" : "#f7f7f7",
          // },
        }}
      />
    </SafeAreaProvider>
  );
}
