import { Image } from "react-native";

export function RequiresExample() {
  return (
    <Image style={{ width: 100, height: 100 }} source={require("./test.png")} />
  );
}
