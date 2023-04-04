import react from "react";
import { StyleSheet, Button, View, Text } from "react-native";
// Header color
// #00d084

const Header = () => {
  return (
    <View styles={styles.header}>
      <Text styles={styles.headerText}> Header Please. </Text>
      <Button title="Press me" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { color: "#00d084" },
  headerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export default Header;
