import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
const CTA = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.buyText}>{data?.independent_title}</Text>
        <Text style={styles.smallText}>{data?.business_text}</Text>
        <Text style={styles.terms}>{data?.terms_text}</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.button_container}>
          <Image
            source={{ uri: data?.appstore_logo }}
            style={{ width: 25, height: 25 }}
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={styles.download}>Download on the</Text>
            <Text style={styles.appStore}>AppStore</Text>
          </View>
        </View>

        <View style={styles.button_container}>
          <Image
            source={{ uri: data?.googleplay_logo }}
            style={{ width: 25, height: 25 }}
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={styles.download}>Get it on</Text>
            <Text style={styles.appStore}>Google Play</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CTA;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    height: 300,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buyText: {
    color: "#fff",
    fontSize: 25,
    letterSpacing: "1",
  },
  smallText: {
    color: "#ED4A66",
    fontSize: 25,
    letterSpacing: "1rem",
    marginTop: 8,
  },
  terms: {
    color: "#fff",
    marginTop: 8,
    fontSize: 18,
  },

  button_container: {
    borderWidth: "1",
    borderColor: "#fff",
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  download: {
    color: "#fff",
  },
  appStore: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  googleImage: {
    width: 20,
    height: 20,
  },
});
