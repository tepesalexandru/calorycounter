import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const BigCircle = ({ title }) => {
  return (
    <View style={styles.circleContainer}>
    <View style={styles.circleOuter}>
        <View style={styles.circleInner}>
            <View style={styles.circleInnermost}>
                    
                            <Text style={styles.calorieCount}> 3764 </Text>
                            <Text style={styles.countLabel}> CALORIES CONSUMED </Text>
                       
            </View>
        </View>
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    paddingVertical: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  circleOuter: {
    borderWidth: 8,
    borderColor: "#ffffff",
    shadowColor: "#47C09B",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: "100%",
  },
  circleInner: {
    borderWidth: 30,
    borderColor: "#76EFB2",
    height: 250,
    width: 250,
    borderRadius: "100%",
  },
  circleInnermost: {
    width: "100%",
    height: "100%",
    borderWidth: 8,
    borderColor: "#ffffff",
    backgroundColor: "#F7FAFC",
    shadowColor: "#47C09B",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  calorieCount: {
    color: "#2C7A7B",
    fontSize: 60,
    fontWeight: "600",
  },
  countLabel: {
      color: "#718096",
      fontSize: 10,
      fontWeight: "600",
  }
});

export default BigCircle;
