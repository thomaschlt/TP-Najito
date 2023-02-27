import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../theme/styles";

const CocktailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nothing to drink yet !</Text>
    </View>
  );
};

export default CocktailScreen;
