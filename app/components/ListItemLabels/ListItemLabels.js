import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItemLabels = ({ item, deleteItem }) => {
  return (
    <View style={styles.Labels}>
        <Text style={styles.LabelText}>Food Items</Text>
        <Text style={styles.LabelText}>Calories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Labels: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
  },
  LabelText: {
    color: "#718096",
    fontWeight: "600"
  }
});

export default ListItemLabels;
