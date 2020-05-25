import React, { useState } from "react";

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Button,
  ImageBackground,
  Dimensions
} from "react-native";

var vWidth = Dimensions.get('window').width;


import { LinearGradient } from 'expo-linear-gradient';

import { foods } from "../config/defaultFoods";
import { storeDataObj } from "../config/StoreData";

import Header from "../components/Header/Header";
import ListItemLabels from "../components/ListItemLabels/ListItemLabels";
import ListItem from "../components/ListItem/ListItem";
import AddItem from "../components/AddItem/AddItem";
import uuid from "uuid-random";
import { getDataObj } from "../config/GetData";

export default function Landing({ navigation }) {
  // Give each item imported from the JSON file a unique ID
  foods.forEach((e) => (e.id = uuid()));

  // Create an items state
  const [items, setItems] = useState(foods);

  // Retrieve the global data
  let myMap = [];

  /// If the map is non-existent (first time using the app)
  if (myMap.length == 0) {
    myMap.push({
      date: "2020-05-25",
      foodArray: foods,
    });
  }

  /// Map saved!
  storeDataObj("GLOBAL_MAP", myMap);

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

      let foundIndex = myMap.findIndex((e) => e.date == "2020-05-25");
      // If today's map already exists
      if (foundIndex != null) {
        console.log("Today's map found!");
        myMap[foundIndex].foodArray.push({
          name: text,
          amount,
          kcal: 300,
        });
      }
      // If the map doesn't exist, we push the current date to the map
      else {
        console.log("Today's map is not found!");
      }
      //console.log("New map created", myMap);

      // Save the list locally into an array of objects
      //storeDataObj(myMap);
    }
  };

  return (
    <View style={styles.container}>
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
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
          style={styles.bottomBarBack}
        />
        <View style={styles.bottomBar}>

          <View style={styles.sideIcons}>
          <Button
            onPress={() => navigation.navigate("Calendar")}
            title="Calendar"
          ></Button>
          </View>


          <View style={styles.centerIcon}>
          <View style={styles.plusIcon}>
          <View style={styles.plusIconInner}>
            <Icon name="plus" size={20} color="#2F855A" />
          </View>
          </View>
          </View>

          <View style={styles.sideIcons}>
          <Button
            onPress={() => navigation.navigate("Calendar")}
            title="Edit Items"
          ></Button>
          </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7FAFC",
    paddingHorizontal: 15,
    flex: 1,
  },
  bottomBarBack: {
    position: "absolute",
    alignSelf: "stretch",
    width: vWidth,
    height: 80,
    bottom: 0,
    left: 0,
  },
  bottomBar: {
    backgroundColor: "#ffffff",
    position: "absolute",
    alignSelf: "stretch",
    width: vWidth,
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    shadowColor: "#47C09B",
    shadowOffset: {
      width: -2,
      height: -4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  sideIcons: {
    flex: 2,
  },
  centerIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIconInner: {
    borderWidth: 4,
    borderColor: "#47C09B",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 500,
    shadowColor: "#47C09B",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});