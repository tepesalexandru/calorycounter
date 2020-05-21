import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Calorie Counter",
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
  },
  text: {
    color: "#38B2AC",
    fontSize: 23,
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default Header;
