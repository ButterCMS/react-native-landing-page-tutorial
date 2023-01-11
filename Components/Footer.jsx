import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Footer = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_content}>
       {data?.footer_text}
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000",
    padding: 15,
    marginTop: 20,
  },
  text_content: {
    color: "#fff",
    textAlign: "center",
    letterSpacing: "0.03rem",
    lineHeight: 20,
  },
});
