import { StyleSheet } from "react-native";
import { colors } from "./colors";

// Common styles
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, paddingBottom: 10 },
});

// Common stack header options
export const screenOptions = {
  headerStyle: {
    backgroundColor: colors.headerBackground,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default styles;
