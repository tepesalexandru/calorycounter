import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert, Button, ImageBackground } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Header from "../components/Header/Header";
import ListItemLabels from "../components/ListItemLabels/ListItemLabels";
import ListItem from "../components/ListItem/ListItem";
import AddItem from "../components/AddItem/AddItem";
import uuid from "uuid-random";

export default function Landing({ navigation }) {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk", amount: 100 , calories: 200 },
    { id: uuid(), text: "Eggs", amount: 120 , calories: 400 },
    { id: uuid(), text: "Bread", amount: 20 , calories: 100 },
    { id: uuid(), text: "Juice", amount: 200 , calories: 300 },
  ]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("testValue", value);
      console.log("Item saved");
    } catch (e) {
      // saving error
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text, amount) => {
    if (!text) {
      Alert.alert(
        "No item entered",
        "Please enter an item when adding to your shopping list",
        [
          {
            text: "Understood",
            style: "cancel",
          },
        ]
      );
    } else {
      setItems((prevItems) => {
        return [{ id: uuid(), text, amount }, ...prevItems];
      });
      storeData("Abocado");
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: '../images/Pattern.png'}} style={{width: '100%', height: '100%'}}>
      <Header />
      <AddItem addItem={addItem} />
      <ListItemLabels />
      <FlatList
        style={styles.ListFlow}
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <View style={styles.BottomBar}></View>
      <Button onPress={() => navigation.navigate("Calendar")}>Hi</Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FAFC",
    paddingHorizontal: 15,
    flex: 1,
  },
});
