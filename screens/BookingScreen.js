// import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
// import React, { useLayoutEffect } from 'react';
// import { MaterialIcons } from "@expo/vector-icons";
// import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

// const BookingScreen = () => {
//   const bookings = useSelector((state) => state.booking?.booking ?? []);
//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       title: "Bookings",
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

//   return (
//     <SafeAreaView>
//       {bookings.length > 0 && bookings.map((item) => (
//         <Pressable
//           key={item.id} 
//           style={{
//             backgroundColor: "white",
//             marginVertical: 10,
//             marginHorizontal: 20,
//             borderColor: "#E0E0E0",
//             borderWidth: 1,
//             padding: 14,
//             borderRadius: 6,
//           }}
//         >
//           <View>
//             <Text style={{ fontSize: 24, fontWeight: "bold" }}>
//               {item.name}
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginTop: 7,
//               }}
//             >
//               <MaterialIcons name="stars" size={24} color="green" />
//               <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
//                 {item.rating}
//               </Text>
//               <Text style={{ marginLeft: 3 }}>•</Text>
//               <View
//                 style={{
//                   padding: 6,
//                   borderRadius: 4,
//                   width: 100,
//                   backgroundColor: "#0039a6",
//                   marginLeft: 4,
//                   borderRadius: 5,
//                 }}
//               >
//                 <Text
//                   style={{
//                     textAlign: "center",
//                     color: "white",
//                     fontSize: 13,
//                     fontWeight: "400",
//                   }}
//                 >
//                   Genius Level
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </Pressable>
//       ))}
//     </SafeAreaView>
//   );
// };

// export default BookingScreen;

// const styles = StyleSheet.create({});

import React,{useLayoutEffect} from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SavedScreen = ({
  rooms,
  children,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
   useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booked Room Details",
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
      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            // source={{ uri: property.image }}
            source={{uri:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695517.jpg?k=c2559cc321dd56a7beb32262c84d60bc1760430a4a49ac6f8713a2fa03cd0d36&o=&hp=1'}}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* <Text style={{ width: 200 }}>{property.name}</Text> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              marginTop: 7,
            }}
          >
            {/* <Text>{property.rating}</Text> */}
          </View>

          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: 'gray',
              fontWeight: 'bold',
            }}
          >
            Blossam Apartment Room
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: '500' }}>
            Price for 1 Night and 1 adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                textDecorationLine: 'line-through',
              }}
            >
              700/
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs 500
            </Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>
              Hotel Room : 1 bed
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#6082B6',
              paddingVertical: 2,
              marginTop: 2,
              borderRadius: 5,
              width: 150,
              paddingHorizontal: 3,
            }}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            // source={{ uri: property.image }}
            source={{uri:'https://images.pexels.com/photos/9373357/pexels-photo-9373357.jpeg?auto=compress&cs=tinysrgb&w=800'}}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* <Text style={{ width: 200 }}>{property.name}</Text> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              marginTop: 7,
            }}
          >
            {/* <Text>{property.rating}</Text> */}
          </View>

          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: 'gray',
              fontWeight: 'bold',
            }}
          >
            Jasoda 505
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: '500' }}>
            Price for 1 Night and 1 adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                textDecorationLine: 'line-through',
              }}
            >
              1200/
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs 800
            </Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>
              Hotel Room : 1 bed
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#6082B6',
              paddingVertical: 2,
              marginTop: 2,
              borderRadius: 5,
              width: 150,
              paddingHorizontal: 3,
            }}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});
