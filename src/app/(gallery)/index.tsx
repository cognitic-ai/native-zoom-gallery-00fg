import { Link } from "expo-router";
import { ScrollView, View, Pressable, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import * as AC from "@bacons/apple-colors";

// Sample images from Unsplash
const PHOTOS = [
  {
    id: "1",
    thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "2",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "3",
    thumb: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "4",
    thumb: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "5",
    thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "6",
    thumb: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "7",
    thumb: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "8",
    thumb: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
  {
    id: "9",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
  },
];

export default function GalleryScreen() {
  const { width } = useWindowDimensions();
  const columns = width >= 768 ? 4 : 3;
  const gap = 2;
  const imageSize = (width - gap * (columns + 1)) / columns;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        padding: gap,
        gap,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap,
        }}
      >
        {PHOTOS.map((photo) => (
          <Link
            key={photo.id}
            href={{
              pathname: "/photo/[id]",
              params: { id: photo.id },
            }}
            asChild
          >
            <Link.Trigger withAppleZoom>
              <Pressable
                style={({ pressed }) => ({
                  width: imageSize,
                  height: imageSize,
                  opacity: pressed ? 0.7 : 1,
                })}
              >
                <Image
                  source={{ uri: photo.thumb }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  contentFit="cover"
                  transition={200}
                />
              </Pressable>
            </Link.Trigger>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
