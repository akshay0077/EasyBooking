import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  Modal,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const { photos, oldPrice, newPrice, adults, rating, selectedDates } =
    route.params;

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <ScrollView horizontal>
            {photos.map((photo, index) => (
              <Pressable key={photo.id} onPress={() => handleImageClick(index)}>
                <Image style={styles.image} source={{ uri: photo.image }} />
              </Pressable>
            ))}
          </ScrollView>
          <View style={styles.modalContainer}>
            <Image
              style={styles.selectedImage}
              source={{ uri: photos[selectedImageIndex].image }}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <View
                  style={{
                    backgroundColor: "#003580",
                    paddingVertical: 3,
                    borderRadius: 5,
                    width: 100,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#17B169",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>
                Travel sustainable
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "500",
              marginHorizontal: 12,
            }}
          >
            Price for 1 Night and {route.params.adults} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 12,
              marginTop: 4,
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 7,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <View
            style={{
              margin: 12,
              flexDirection: "row",
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check In
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {/* {route.params.selectedDates.startDate} */}
                {route.params.selectedDates?.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check Out
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {/* {route.params.selectedDates.endDate} */}
                {route.params.selectedDates?.endDate}
              </Text>
            </View>
          </View>
          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Rooms and Guests
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.rooms} rooms {route.params.adults} adults{" "}
              {route.params.children} children
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
          <Amenities />

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>
      </SafeAreaView>

      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms: route.params.availableRooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.selectedDates.startDate,
            endDate: route.params.selectedDates.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          position: "absolute",
          bottom: 20,
          padding: 15,
          width: "95%",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Select Availabilty
        </Text>
      </Pressable>
    </>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
  },

  selectedImage: {
    width: "100%",
    height: "100%",
  },
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: pixelNormalize(8),
    alignItems: "center",
  },
  photo: {
    width: "48%",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: pixelNormalize(8),
  },
  showMoreButton: {
    backgroundColor: "#fff",
    paddingHorizontal: pixelNormalize(10),
    paddingVertical: pixelNormalize(6),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: pixelNormalize(10),
  },
});
