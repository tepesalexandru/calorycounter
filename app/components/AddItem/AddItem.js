import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onChangeText = (textValue) => setText(textValue);

  const onChangeAmount = (amountValue) => setAmount(amountValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChangeText}
      />
      <TextInput
        placeholder="Add amount..."
        onChangeText={onChangeAmount}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => addItem(text, amount)}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;
