import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const Wishlist = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>{data?.buy_text}</Text>
        <Text style={styles.header_text}>{data?.merchant_text}</Text>
        <Text style={styles.header_text_last}>{data?.small_text}</Text>
      </View>
      <View style={styles.content_container}>
        <Text style={styles.content}>{data?.wishlist_subtitle}</Text>
      </View>

      <View style={styles.input_container}>
        <TextInput
          placeholder="Input your email address"
          style={styles.input}
        />
        <View>
          <Button title="JOIN  WAITLIST" color="rgba(255, 0, 104, 1)" />
        </View>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header_container: {
    width: "100%",
    alignItems: "center",
  },

  header_text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  header_text_last: {
    color: "rgba(255, 0, 104, 1)",
    fontSize: 20,
    fontWeight: "600",
  },
  content_container: {
    width: " 70%",
    marginVertical: 20,
  },
  content: {
    color: "#fff",
    textAlign: "center",
  },
  input_container: {
    width: "80%",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#fff",
    width: "50%",
    padding: 8,
    borderRadius: 5,
  },
});
