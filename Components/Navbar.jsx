import React from "react";
import { View, StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <View style={styles.nav_container}>
      <Image source={logo} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  nav_container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
