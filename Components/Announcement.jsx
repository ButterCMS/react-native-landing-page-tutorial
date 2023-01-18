import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png";
import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/Insta.png";
import twitter from "../assets/twitter.png";
const Announcement = ({ data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: data?.logo }}
          style={{ width: 200, height: 90 }}
        />
      </View>
      <View style={styles.content_container}>
        <Text style={styles.content}>{data?.subtitle_text}</Text>
      </View>
      <View>
        <View style={styles.icon_box}>
          <View style={styles.icon_container}>
            <Image
              source={{ uri: data?.whatsapp_logo }}
              style={styles.image_socials}
            />
          </View>

          <View style={styles.icon_container}>
            <Image
              source={{ uri: data?.instagram_logo }}
              style={styles.image_socials}
            />
          </View>

          <View style={styles.icon_container}>
            <Image
              source={{ uri: data?.twitter_logo }}
              style={styles.image_socials}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  content_container: {
    marginTop: 20,
  },
  content: {
    letterSpacing: "0.03rem",
    fontSize: 15,
  },
  icon_container: {
    backgroundColor: "#000",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: 10,
  },
  icon_box: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image_socials: {
    height: 20,
    width: 20,
  },
});
