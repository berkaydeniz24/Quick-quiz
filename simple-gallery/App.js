import { useState } from 'react';
import {
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// Gallery data with images
const GALLERY_DATA = [
  { id: '1', caption: 'Misty Mountains', url: 'https://picsum.photos/id/10/400/400' },
  { id: '2', caption: 'Ocean Waves', url: 'https://picsum.photos/id/1015/400/400' },
  { id: '3', caption: 'Forest Path', url: 'https://picsum.photos/id/1043/400/400' },
  { id: '4', caption: 'City Night', url: 'https://picsum.photos/id/1077/400/400' },
  { id: '5', caption: 'Desert Dunes', url: 'https://picsum.photos/id/247/400/400' },
  { id: '6', caption: 'Mountain Lake', url: 'https://picsum.photos/id/1036/400/400' },
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SimpleGallery</Text>

      {/* Viewer Container */}
      <View style={styles.viewerContainer}>
        {selectedImage ? (
          <>
            <Image
              source={{ uri: selectedImage.url }}
              style={styles.mainImage}
              resizeMode="contain"
            />
            <Text style={styles.captionText}>{selectedImage.caption}</Text>
          </>
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Tap an image to view it</Text>
          </View>
        )}
      </View>

      {/* Grid Container */}
      <View style={styles.gridContainer}>
        <FlatList
          data={GALLERY_DATA}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable
              style={styles.thumbnailContainer}
              onPress={() => setSelectedImage(item)}
            >
              <Image
                source={{ uri: item.url }}
                style={styles.thumbnailImage}
              />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  viewerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
  },
  mainImage: {
    width: '90%',
    height: '80%',
    borderRadius: 6,
  },
  captionText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  gridContainer: {
    flex: 1,
    padding: 5,
  },
  thumbnailContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
});// TERMINAL TEST SATIRI
