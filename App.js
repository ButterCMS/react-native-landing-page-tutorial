import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import CTA from "./Components/CTA";
import Navbar from "./Components/Navbar";
import shop from "./assets/shop.png";
import Terms from "./Components/Terms";
import Wishlist from "./Components/Wishlist";
import Announcement from "./Components/Announcement";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import axios from "axios";
export default function App() {
  const [data, setData] = useState();

  const access_Token = "API KEY";
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.buttercms.com/v2/pages/*/home-page/?auth_token=${access_Token}`
        )
        .then((response) => {
          setData(response.data.data.fields);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <ScrollView>
          <Navbar />
          <CTA data={data?.cta_section} />
          <Image
            source={{ uri: data?.image_section?.clothe_image }}
            style={{ width: "100%", height: 200 }}
          />
          <Terms data={data?.terms_section} />
          <Wishlist data={data?.wishlist_section} />
          <Announcement data={data?.announcement_section} />
          <Contact data={data?.contact_section} />
          <Footer data={data?.footer_section} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
