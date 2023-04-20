import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  const coordinates = [
    {
      latitude: 24.6477,
      longitude: 69.7349,
    },
    {
      latitude: 23.806,
      longitude: 71.4704,
    },
    {
      latitude: 22.0149,
      longitude: 72.5873,
    },
    {
      latitude: 20.3974,
      longitude: 72.8179,
    },
    {
      latitude: 20.1224,
      longitude: 69.6254,
    },
  ];

  const locationIcons = {
    location1: require("../assets/icons/location-2.png"),
  };

  useEffect(() => {
    const searchResults = route.params?.searchResults;
    if (searchResults?.length > 0) {
      searchResults.forEach((result) => {
        result.properties?.forEach((property) => {
          coordinates.push({
            latitude: Number(property.latitude),
            longitude: Number(property.longitude),
          });
        });
      });
      mapView.current.fitToCoordinates(coordinates, {
        edgePadding: {
          top: 190,
          left: 190,
          bottom: 190,
          right: 190,
        },
      });
    }
  }, []);

  const region = {
    latitude: 22.2587,
    longitude: 71.1924,
    latitudeDelta: 4.5,
    longitudeDelta: 4.5,
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapView}
        style={{ width: "100%", height: "100%" }}
        region={region}
      >
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              key={property.id}
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
              image={locationIcons[property.locationId]} // set the marker icon based on the location's identifier
              onPress={() => {
                // handle marker press event
                navigation.navigate("LocationDetail", { property });
              }}
            />
          ))
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#003580",
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 4,
  },
  markerText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MapScreen;
