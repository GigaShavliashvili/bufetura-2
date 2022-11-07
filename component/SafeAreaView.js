import { StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "#121010",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
position:"relative",
    }
  });