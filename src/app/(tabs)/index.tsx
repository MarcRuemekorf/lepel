import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useEffect, useState } from "react";
import { getLogsByDate } from "../../../db/queries";

export default function TodayScreen() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const logs = getLogsByDate(today);
    setCount(logs.length);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Today's Log: {count}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
