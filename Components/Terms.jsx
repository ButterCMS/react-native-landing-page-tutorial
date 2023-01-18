import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Terms = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.terms}>{data?.terms_heading}</Text>
      <View style={styles.text_container}>
        <Text style={styles.text_content}>{data?.terms_content}</Text>
      </View>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  terms: {
    color: "rgba(255, 0, 104, 1)",
    fontSize: 20,
    fontWeight: "600",
  },
  text_container: {
    width: "70%",
    marginTop: 10,
  },
  text_content: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: "0.03rem",
  },
});
