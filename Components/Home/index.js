import react from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  const bodyText =
    "Hello And welcome to my app, this is the current landing page to help assist log times for fabrication 🪛. Please feel free to reach out to me if you need anything.";

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.baseText}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    color: "black",
  },
});

export default Home;
