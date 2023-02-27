import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IngredientsScreen from "../screens/IngredientsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for settings tab
const IngredientsStack = createNativeStackNavigator();

const IngredientsStackNavigator = () => {
  return (
    <IngredientsStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <IngredientsStack.Screen
        name="The ingredients"
        component={IngredientsScreen}
      />
    </IngredientsStack.Navigator>
  );
};

export default IngredientsStackNavigator;
