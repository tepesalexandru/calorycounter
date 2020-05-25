import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const getData = async (ITEM_KEY) => {
  try {
    const value = await AsyncStorage.getItem(ITEM_KEY);
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
};

export const getDataObj = async (ITEM_KEY) => {
  try {
    const jsonValue = await AsyncStorage.getItem(ITEM_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
