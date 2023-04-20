import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PropertyCard from "../components/PropertyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SavedScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const favoriteProperties = await AsyncStorage.getItem(
          "favoriteProperties"
        );
        if (favoriteProperties !== null) {
          setFavorites(JSON.parse(favoriteProperties));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFavorites();
  }, []);

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          style={styles.flat}
          data={favorites}
          renderItem={({ item }) => <PropertyCard property={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>You have no favorite properties.</Text>
      )}
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    borderRadius: 100,
  },
});
