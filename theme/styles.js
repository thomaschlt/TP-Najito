import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

// Common styles
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, paddingBottom: 10 },
  item: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    backgroundColor: colors.itemBackground,
    width: width,
  },
  title: {
    paddingLeft: 10,
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
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
