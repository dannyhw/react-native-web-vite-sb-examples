import { StyleSheet, Text, View } from "react-native";
import "./global.css";

// Storybook is enabled with EXPO_PUBLIC_STORYBOOK_ENABLED=true (see the
// storybook scripts). withStorybook in metro.config.js then swaps this entry
// point for .rnstorybook/index.tsx.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
