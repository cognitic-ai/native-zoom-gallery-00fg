import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import * as AC from "@bacons/apple-colors";

// Same photo data as the gallery
const PHOTOS = [
  {
    id: "1",
    thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Mountain Landscape",
    description: "Beautiful mountain vista at sunset",
  },
  {
    id: "2",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Forest Path",
    description: "Winding path through autumn forest",
  },
  {
    id: "3",
    thumb: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Sunset Beach",
    description: "Serene beach at golden hour",
  },
  {
    id: "4",
    thumb: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Desert Dunes",
    description: "Rolling sand dunes under blue sky",
  },
  {
    id: "5",
    thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Misty Lake",
    description: "Foggy morning by the lake",
  },
  {
    id: "6",
    thumb: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Green Valley",
    description: "Lush valley landscape",
  },
  {
    id: "7",
    thumb: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Northern Lights",
    description: "Aurora borealis over snowy mountains",
  },
  {
    id: "8",
    thumb: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Ocean Waves",
    description: "Powerful waves crashing on shore",
  },
  {
    id: "9",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=1600&fit=crop",
    aspectRatio: 3 / 4,
    title: "Tropical Paradise",
    description: "Crystal clear waters and palm trees",
  },
];

export default function PhotoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width } = useWindowDimensions();
  const photo = PHOTOS.find((p) => p.id === id);

  if (!photo) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: AC.label }}>Photo not found</Text>
      </View>
    );
  }

  const imageWidth = width;
  const imageHeight = imageWidth / photo.aspectRatio;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingBottom: 32,
      }}
    >
      <Link.AppleZoom.Target>
        <Image
          source={{ uri: photo.full }}
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
          contentFit="cover"
          transition={200}
        />
      </Link.AppleZoom.Target>

      <View
        style={{
          padding: 20,
          gap: 8,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: AC.label,
          }}
          selectable
        >
          {photo.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: AC.secondaryLabel,
            lineHeight: 24,
          }}
          selectable
        >
          {photo.description}
        </Text>
      </View>
    </ScrollView>
  );
}
