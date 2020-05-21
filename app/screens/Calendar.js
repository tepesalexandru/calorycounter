import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

import AsyncStorage from "@react-native-community/async-storage";

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: undefined,
      testString: "",
      dataMap: null,
    };

    this.getDataObj().then((data) => {
      if (data == null) {
        this.state.dataMap = new Map();
      } else {
        //this.state.dataMap = new Map(data);
        console.log(data);
      }
      //console.log(dataMap);
    });
  }

  onDayPress = (day) => {
    this.setState({ selected: day.dateString }, () => {
      this.getDataObj().then((data) => console.log(data));
    });
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("testMap");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  getDataObj = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("testMap");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return (
      <View>
        <Calendar
          style={styles.calendar}
          onDayPress={this.onDayPress}
          markedDates={{
            [this.state.selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
        <Text style={styles.text}>Day selected: {this.state.selected}</Text>
        <Text style={styles.dataText}>No data available.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
  dataText: {
    textAlign: "center",
    margin: 50,
    fontSize: 20,
  },
});
