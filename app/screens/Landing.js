import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Button,
  ImageBackground,
} from "react-native";

import { foods } from "../config/defaultFoods";
import { storeDataObj } from "../config/StoreData";

import Header from "../components/Header/Header";
import ListItemLabels from "../components/ListItemLabels/ListItemLabels";
import ListItem from "../components/ListItem/ListItem";
import AddItem from "../components/AddItem/AddItem";
import uuid from "uuid-random";

export default function Landing({ navigation }) {
  // Give each item imported from the JSON file a unique ID
  foods.forEach((e) => (e.id = uuid()));

  // Create an items state
  const [items, setItems] = useState(foods);

  // Create an empty array to store the foods of today
  let myMap = [];

  /// Function to delete an item from the item state by id
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  /// Function to add an item to the items state
  const addItem = (text, amount) => {
    // If the input form of the item name is empty
    if (!text) {
      // Create an Alert box
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
    }
    // If the input form of the item is not empty
    else {
      // Add the new item to the react state
      setItems((prevItems) => {
        return [{ id: uuid(), name: text, amount }, ...prevItems];
      });

      let found = myMap.find((e) => e.date == "2020-05-20");
      // If today's map already exists
      if (found) {
        /*console.log("Map found!");
        found.foods = items;
        console.log(myMap);
        console.log(found);*/
      }
      // If the map doesn't exist, we push the current date to the map
      else {
        /*console.log("this is the current map", myMap);
        myMap.push({
          date: "2020-05-20",
          foods: items,
        });*/
      }
      //console.log("New map created", myMap);

      // Save the list locally into an array of objects
      storeDataObj(myMap);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "../images/Pattern.png" }}
        style={{ width: "100%", height: "100%" }}
      >
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
        <Button
          onPress={() => navigation.navigate("Calendar")}
          title="Calendar"
        ></Button>
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
