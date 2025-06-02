import { useEffect } from "react";
import { useRef } from "react";
import { Text } from "react-native";
import ViewShot from "react-native-view-shot";

export function ExampleCaptureOnMountManually() {
  const ref = useRef<ViewShot>(null);

  useEffect(() => {
    // on mount
    if (ref.current) {
      ref.current.capture?.().then((uri) => {
        console.log("do something with ", uri);
      });
    }
  }, []);

  return (
    <ViewShot
      ref={ref}
      options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}
    >
      <Text>...Something to rasterize...</Text>
    </ViewShot>
  );
}
