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
    };
  }

  onDayPress = (day) => {
    this.setState({ selected: day.dateString }, () => {
      this.getData();
      console.log(this.state.testString);
    });
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("testValue");
      if (value !== null) {
        testString = value;
      }
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
