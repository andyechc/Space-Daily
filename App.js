import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Platform, Text } from "react-native";

import Home from "./src/pages/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === "android" && 35, flex: 1 }}>
        <Text style={styles.title}>Space Daily</Text>
        <Home />
      </View>

      <StatusBar style="
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001120",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
