import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PropertyCard = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
    try {
      setIsFavorite(!isFavorite);
      const favoriteProperties = await AsyncStorage.getItem(
        "favoriteProperties"
      );
      let updatedProperties = [];
      if (favoriteProperties !== null) {
        updatedProperties = JSON.parse(favoriteProperties);
      }
      if (isFavorite) {
        updatedProperties = updatedProperties.filter(
          (prop) => prop.id !== property.id
        );
      } else {
        updatedProperties.push(property);
      }
      await AsyncStorage.setItem(
        "favoriteProperties",
        JSON.stringify(updatedProperties)
      );
    } catch (error) {
      console.log(error);
    }
  };

  

    useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Saved Items",
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

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            availableRooms: property.rooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDates: selectedDates,
          })
        }
        style={{ marginTop: 70, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <TouchableOpacity onPress={toggleFavorite}>
              
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs {property.newPrice * adults}
            </Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Room : 1 bed
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#6082B6",
              paddingVertical: 2,
              marginTop: 2,
              borderRadius: 5,
              width: 150,
              paddingHorizontal: 3,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
