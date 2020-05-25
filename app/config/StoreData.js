import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

/// Function to save a string in the local storage
export const storeData = async (ITEM_KEY, value) => {
  try {
    await AsyncStorage.setItem(ITEM_KEY, value);
    console.log("Item saved", value);
  } catch (e) {
    // saving error
  }
};

/// Function to save an object in the local storage
export const storeDataObj = async (ITEM_KEY, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(ITEM_KEY, jsonValue);
    console.log("Object saved");
  } catch (e) {
    // saving error
  }
};
