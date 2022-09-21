import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Arial"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});


function Title() {
  return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          Employees csv file Upload
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={6}>
          The .csv file to upload should be in the form:
            {"\n"}
            ["employeeId", "mnemonic", "address","private_key", "public_key", "compressed_public_key"]
            {"\n"}
          {"\n"}</Text>
      </Text>
  );
}

export default Title;
