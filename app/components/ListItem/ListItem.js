import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text
          style={styles.Cross}
          onPress={() => {
            deleteItem(item.id);
          }}
        >
          X
        </Text>

        <View style={styles.listData}>
          <View style={styles.listItemData}>
            <Text style={styles.listItemText}>{item.name}</Text>
            <Text style={styles.secondaryDataOne}>{item.amount}g</Text>
          </View>
          <Text style={styles.secondaryDataTwo}>{item.kcal} kcal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#47C09B",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  Cross: {
    paddingRight: 20,
  },
  listData: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondaryDataOne: {
    color: "#2F855A",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryDataTwo: {
    color: "#2F855A",
    fontSize: 18,
    fontWeight: "600",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    color: "#4A5568",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default ListItem;
