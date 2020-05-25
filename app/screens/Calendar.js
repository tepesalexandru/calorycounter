import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

import { getDataObj } from "../config/GetData";

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);

    // Set the default states
    this.state = {
      selected: undefined,
      testString: "",
      dataMap: null,
      dataMessage: "No data available.",
    };

    /// Retrieve data from the local storage
    getDataObj().then((data) => {
      // If there is no available data
      if (data == null) {
        this.state.dataMap = [];
      }
      // If there is available data
      else {
        // Assign the existing data to the dataMap
        this.state.dataMap = data;
        /*let found = data.find((e) => e.date === "2020-05-20");
        console.log(found);*/
      }
    });
  }

  /// Function to handle pressing on a calendar date
  onDayPress = async (day) => {
    await this.setState({ selected: day.dateString });
    let found = this.state.dataMap.find((e) => e.date === this.state.selected);
    if (found) {
      //this.state.dataMessage = "" + found.foods.length + " foods.";
      this.setState({
        dataMessage: "" + found.foods.length + " foods.",
      });
    } else {
      this.setState({
        dataMessage: "No foods eaten on this date.",
      });
      //this.state.dataMessage = "No foods eaten on this date.";
      //console.log(this.state.selected);
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
              disableTouchEvent: false,
            },
          }}
        />
        <Text style={styles.text}>Day selected: {this.state.selected}</Text>
        <Text style={styles.dataText}>{this.state.dataMessage}</Text>
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
