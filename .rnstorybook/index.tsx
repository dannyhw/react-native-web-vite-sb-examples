import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerRootComponent } from "expo";
import { view } from "./storybook.requires";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

// When storybook is enabled, withStorybook swaps the app entry point for this
// file, so it needs to register the root component itself.
registerRootComponent(StorybookUIRoot);

export default StorybookUIRoot;
