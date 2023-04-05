import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Import Components
import Home from "./Components/Home/index.js";
import Header from "./Components/Header/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
