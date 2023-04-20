import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
// import { ModalPortal,ModalProvider,ModalFooter,ModalButton,ModalTitle,SlideAnimation,ModalContent } from 'react-native-modals';
import {
  ModalPortal,
  ModalFooter,
  ModalButton,
  ModalTitle,
  ModalContent,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "EasyBooking.com",
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  console.log(route.params);

  const searchPlaces = (place) => {
    if (!place) {
      Alert.alert(
        "Invalid Details",
        "Please enter a place to search",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else if (!route?.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    if (route?.params && selectedDates && place) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };

  const renderHeader = () => (
    <Text
      style={{
        color: "#fff",
        backgroundColor: "#003580",
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
      }}
    >
      Select the Date
    </Text>
  );

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View style={styles.container}>
            {/* Select the Destination */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Search")}
              style={styles.inputContainer}
            >
              <Feather name="search" size={24} color="#666" />
              <Text style={styles.inputLabel}>
                {route?.params ? route.params.input : "Enter Your Destination"}
              </Text>
            </TouchableOpacity>

            {/* Select the date */}
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => console.log("TouchableOpacity pressed")}
            >
              <Feather name="calendar" size={24} color="#666" />
              <Text style={styles.inputLabel}>Date : </Text>
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={""}
                mode={"range"}
              />
            </TouchableOpacity>

            {/* Guest and Rooms */}

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.inputContainer}
            >
              <Ionicons name="person-outline" size={24} color="#666" />
              <TextInput
                style={styles.inputLabel}
                placeholder={`${rooms} room • ${adults} adults • ${children} Children`}
              />
            </TouchableOpacity>

            {/* Search Button  */}
            <TouchableOpacity
              onPress={() => searchPlaces(route?.params?.input)}
              style={styles.searchButton}
            >
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 17,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          Travel More spend less
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: "#003580",
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              Genius
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              You are ate genius level one in our loyalty program
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              15% Discounts
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Complete 5 stays to unlock level 2
            </Text>
          </Pressable>

          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              10% Discounts
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Enjoy Discounts at participating at properties worldwide
            </Text>
          </Pressable>
        </ScrollView>

        <ModalPortal
          visible={modalVisible}
          onTouchOutside={() => setModalVisible(false)}
          modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
          onHardwareBackPress={() => setModalVisible(false)}
          swipeThreshold={200}
          onBackdropPress={() => setModalVisible(false)}
          swipeDirection={["up", "down"]}
          footer={
            <ModalFooter>
              <ModalButton
                text="Apply"
                style={{
                  marginBottom: 20,
                  color: "white",
                  backgroundColor: "#003580",
                }}
                onPress={() => setModalVisible(false)}
              />
            </ModalFooter>
          }
          modalTitle={<ModalTitle title="Select rooms and guests" />}
        >
          <ModalContent style={{ width: "100%", height: 310 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <TouchableOpacity
                  onPress={() => setRooms(Math.max(1, rooms - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>

                <TouchableOpacity
                  onPress={() => setRooms((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {rooms}
              </Text>

              <TouchableOpacity
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <TouchableOpacity
                  onPress={() => setAdults(Math.max(1, adults - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>

                <TouchableOpacity
                  onPress={() => setAdults((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <TouchableOpacity
                  onPress={() => setChildren(Math.max(0, children - 1))}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>

                <TouchableOpacity
                  onPress={() => setChildren((c) => c + 1)}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderColor: "#BEBEBE",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "600",
                      paddingHorizontal: 6,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ModalContent>
        </ModalPortal>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
  },
  inputLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#003580",
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
