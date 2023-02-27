import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CocktailScreen from "../screens/CocktailScreen";
import DetailsScreen from "../screens/CocktailDetailsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for home tab
const CocktailsStack = createNativeStackNavigator();

const CocktailsNavigator = () => {
  return (
    <CocktailsStack.Navigator
      initialRouteName="Cocktails"
      screenOptions={screenOptions}
    >
      <CocktailsStack.Screen
        name="Cocktail" // Le problème de confusion vient d'ici, faire attention à ça
        component={CocktailScreen}
        options={{ title: "My cocktails" }}
      />
      <CocktailsStack.Screen name="Details" component={DetailsScreen} />
    </CocktailsStack.Navigator>
  );
};

export default CocktailsNavigator;
