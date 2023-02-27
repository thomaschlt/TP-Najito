import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "../theme/styles";

const DetailsScreen = ({ route }) => {
  const [cocktail, setCocktail] = useState(route.params);
  return (
    <View style={styles.container}>
      <Image style={styles.imgDetails} source={{ uri: cocktail.image }} />
      <Text style={styles.titleDetails}>{cocktail.name}</Text>
      <Text style={styles.instructionsDetails}>{cocktail.instructions}</Text>
    </View>
  );
};

export default DetailsScreen;
