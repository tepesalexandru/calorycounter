import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("testValue");
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
};

export const getDataObj = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("testMap");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
