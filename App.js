import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Restaurants from './src/components/Restaurants';
import Search from "./src/components/Search";

export default function App() {
  const [term, setTerm] = useState("Burger");

  //FlatList: rendering multiple items
  const commonCategories = [
    { name: "Burger", imageUrl: require("../assets/images/burger.png") },
    { name: "Cake", imageUrl: require("../assets/images/cake.png") },
    { name: "Pasta", imageUrl: require("../assets/images/pasta.png") },
    { name: "Pizza", imageUrl: require("../assets/images/pizza.png") },
    { name: "Smoothies", imageUrl: require("../assets/images/smoothies.png") },
    { name: "Steak", imageUrl: require("../assets/images/steak.png") },
  ];

  {
    /* setTimeout(() => {
    console.log("Initial Term:", term);
    setTerm("Pizza");
    console.log("After Change Term:", term);
  }, 3000); */
  }

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <StatusBar style="auto" />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
