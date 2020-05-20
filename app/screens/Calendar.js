import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: undefined,
    };
  }

  onDayPress = (day) => {
    this.setState({ selected: day.dateString });
  };

  render() {
    return (
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
});
