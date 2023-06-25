// import { Pressable, Text, View } from "react-native";
// import React, { useLayoutEffect, useState } from "react";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Provider, useDispatch } from "react-redux";
// import { createStore } from "redux";
// import { savedPlaces } from "../SavedReducer";
// import { setDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import LottieView from "lottie-react-native";
// import animation from "../animation/booking-success.json";

// const confirmBooking = async (dispatch, route, uid, setShowAnimation) => {
//   dispatch(savedPlaces(route.params));

//   try {
//     // Store booking details in AsyncStorage
//     await AsyncStorage.setItem("bookingDetails", JSON.stringify(route.params));

//     // Store booking details in Firebase Firestore
//     await setDoc(
//       doc(db, "users", `${uid}`),
//       {
//         bookingDetails: { ...route.params },
//       },
//       {
//         merge: true,
//       }
//     );

//     setShowAnimation(true);
//   } catch (error) {
//     console.log("Error storing booking details:", error);
//   }
// };

// const store = createStore(savedPlaces);

// const ConfirmationScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: "Confirmation",
//       headerTitleStyle: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "white",
//       },
//       headerStyle: {
//         backgroundColor: "#003580",
//         height: 110,
//         borderBottomColor: "transparent",
//         shadowColor: "transparent",
//       },
//     });
//   }, []);
//   const dispatch = useDispatch();
//   const uid = auth.currentUser.uid;

//   const [animationCompleted, setAnimationCompleted] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const onAnimationFinish = () => {
//     setAnimationCompleted(true);
//   };

//   if (animationCompleted) {
//     navigation.navigate("Bookings");
//   }

//   return (
//     <View>
//       <Pressable
//         onPress={() => confirmBooking(dispatch, route, uid, setShowAnimation)}
//         style={{ backgroundColor: "white", margin: 10 }}
//       >
//         <View
//           style={{
//             marginHorizontal: 12,
//             marginTop: 10,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <View>
//             <Text style={{ fontSize: 25, fontWeight: "bold" }}>
//               {route.params.name}
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 6,
//                 marginTop: 7,
//               }}
//             >
//               <MaterialIcons name="stars" size={24} color="green" />
//               <Text>{route.params.rating}</Text>
//               <View
//                 style={{
//                   backgroundColor: "#003580",
//                   paddingVertical: 3,
//                   borderRadius: 5,
//                   width: 100,
//                 }}
//               >
//                 <Text
//                   style={{
//                     textAlign: "center",
//                     color: "white",
//                     fontSize: 15,
//                   }}
//                 >
//                   Genius Level
//                 </Text>
//               </View>
//             </View>
//           </View>

//           <View
//             style={{
//               backgroundColor: "#17B169",
//               paddingHorizontal: 6,
//               paddingVertical: 4,
//               borderRadius: 6,
//             }}
//           >
//             <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
//               Confirm Booking
//             </Text>
//           </View>
//         </View>
//       </Pressable>
//       {showAnimation ? (
//         <View style={{ alignItems: "center", marginTop: 50 }}>
//           <LottieView
//             source={animation}
//             autoPlay
//             loop={false}
//             onAnimationFinish={onAnimationFinish}
//           />
//         </View>
//       ) : (
//         <View style={{ alignItems: "center", marginTop: 50 }}>
//           <Text style={{ fontSize: 30, fontWeight: "bold" }}>
//             Your booking is confirmed!
//           </Text>
//           <Text style={{ fontSize: 20, marginTop: 20 }}>
//             We have sent you an email with your booking details.
//           </Text>
//           <Pressable
//             onPress={() =>
//               confirmBooking(dispatch, route, uid, setShowAnimation)
//             }
//             style={{
//               backgroundColor: "#003580",
//               paddingHorizontal: 20,
//               paddingVertical: 10,
//               borderRadius: 6,
//               marginTop: 30,
//             }}
//           >
//             <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
//               Confirm
//             </Text>
//           </Pressable>
//         </View>
//       )}
//     </View>
//   );
// };

// export default function WrappedConfirmationScreen() {
//   return (
//     <Provider store={store}>
//       <ConfirmationScreen />
//     </Provider>
//   );
// }


import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";
import { setDoc,doc } from "firebase/firestore";
import { auth, db } from "../firebase";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
  const dispatch = useDispatch();
  const uid = auth.currentUser.uid
  const confirmBooking = async () => {
    dispatch(savedPlaces(route.params));

    await setDoc(
      doc(db, "users", `${uid}`),
      {
        bookingDetails: { ...route.params },
      },
      {
        merge: true,
      }
    );

    navigation.navigate("Bookings");
  }
  return (
    <View>
      <Pressable style={{ backgroundColor: "white", margin: 10 }}>
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

        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.startDate}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.endDate}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Pressable
        onPress={confirmBooking}
          style={{
            backgroundColor: "#003580",
            width: 120,
            padding: 5,
            marginHorizontal: 12,
            marginBottom: 20,
            borderRadius:4
          }}
        >
          <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"bold"}}>Book Now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});