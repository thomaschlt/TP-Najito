import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CocktailScreen from "../screens/CocktailScreen";
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
    </CocktailsStack.Navigator>
  );
};

export default CocktailsNavigator;
