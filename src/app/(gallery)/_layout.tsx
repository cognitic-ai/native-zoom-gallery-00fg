import { Stack } from "expo-router/stack";
import * as AC from "@bacons/apple-colors";

export default function GalleryLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: {
          backgroundColor: "transparent",
        },
        headerTitleStyle: {
          color: AC.label as any,
        },
        headerBlurEffect: "systemChromeMaterial",
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Gallery",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="photo/[id]"
        options={{
          title: "",
          headerLargeTitle: false,
        }}
      />
    </Stack>
  );
}
