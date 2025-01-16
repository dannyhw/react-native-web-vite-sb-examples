import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { FontLoader } from "FontLoader";

function App() {
  return (
    <FontLoader fallback={<View><Text>Loading Fonts...</Text></View>}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </FontLoader>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;


