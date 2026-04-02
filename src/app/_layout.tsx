import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, useColorScheme } from "react-native";
import { initDb } from "../../db";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const colorScheme = useColorScheme();

  useEffect(() => {
    try {
      initDb();
      setReady(true);
    } catch (e: any) {
      setError(e.message);
    }
  }, []);

  if (error) return <Text>DB error: {error}</Text>;
  if (!ready) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="log/index" options={{ title: "Log Food" }} />
        <Stack.Screen name="log/scan" options={{ title: "Scan Barcode" }} />
      </Stack>
    </ThemeProvider>
  );
}
