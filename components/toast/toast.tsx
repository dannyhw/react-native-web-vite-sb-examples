import Toast from "react-native-toast-message";
import { Button } from "react-native";

export default function Toast2() {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
  };

  return <Button title="Show toast" onPress={showToast} />;
}
