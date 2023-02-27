import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "../theme/styles";
import CocktailService from "../api/cocktailService";

const CocktailScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchCocktails = async (query) => {
    const results = await CocktailService.searchCocktailsByName(query);
    console.log(results);
    setSearchResults(results);
  };

  const handlePress = (item) => {
    navigation.navigate("Details", item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a cocktail name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={() => searchCocktails(searchQuery)}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CocktailScreen;
