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
  Dimensions,
  TouchableOpacity
} from "react-native";

var vWidth = Dimensions.get('window').width;

import { foods } from "../config/defaultFoods";
import { storeDataObj } from "../config/StoreData";

import Header from "../components/Header/Header";
import BigCircle from "../components/BigCircle/BigCircle";
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
        <BigCircle />
        <AddItem addItem={addItem} />
        <ListItemLabels />
        <FlatList
          style={styles.ListFlow}
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
        

        <View style={styles.bottomBar}>

          <View style={styles.sideIcons}>
          <TouchableOpacity
            style={styles.bottomButtons}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Icon name="calendar-alt" size={20} color="#38B2AC" />
            <Text style={styles.ButtonText}>Calendar</Text>
          </TouchableOpacity>
          </View>


          <View style={styles.centerIcon}>
          <TouchableOpacity style={styles.plusIcon}>
          <View style={styles.plusIconInner}>
            <Icon name="plus" size={20} color="#4FD1C5" />
          </View>
          </TouchableOpacity>
          </View>

          <View style={styles.sideIcons}>
          <TouchableOpacity
            style={styles.bottomButtons}
            onPress={() => navigation.navigate("Calendar")}
          >
            <Icon name="edit" size={20} color="#38B2AC" />
            <Text style={styles.ButtonText}>Edit Items</Text>
          </TouchableOpacity>
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
  ListFlow: {
    zIndex: 1,
    paddingBottom: 40,
  },
  bottomBar: {
    zIndex: 10,
    position: "absolute",
    alignSelf: "stretch",
    width: "100%",
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
  centerIcon: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    borderWidth: 4,
    borderColor: "#ffffff",
    borderRadius: 500,
    shadowColor: "#47C09B",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  plusIconInner: {
    borderWidth: 4,
    borderColor: "#76EFB2",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 500,
  },
  sideIcons: {
    backgroundColor: "#ffffff",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtons: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#2C7A7B",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "600",
  },
});