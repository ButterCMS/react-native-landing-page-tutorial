import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const Contact = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{data?.contact_header_text}</Text>
        <View>
          <Text>{data?.contact_text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
  },
});
