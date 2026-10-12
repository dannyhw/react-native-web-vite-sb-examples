This is an example of multiple different packages to show how they can be used with `@storybook/react-native-web-vite`

![picture of storybook](https://github.com/user-attachments/assets/cf98766d-8b90-44ab-b718-94ab16e63205)

Built with Expo SDK 57 (React Native 0.86), Storybook 10.6, NativeWind 4 and Vite 8. The project uses [bun](https://bun.sh) as its package manager.

```sh
bun install
```

# Web

Start react native web storybook:

```sh
bun run storybook:web
```

build react native web storybook:

```sh
bun run build-storybook
```

# Native

Start the on-device storybook (`.rnstorybook`) with Expo:

```sh
bun run storybook:ios
# or
bun run storybook:android
```
