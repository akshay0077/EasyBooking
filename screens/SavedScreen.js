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
            source={{uri:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1'}}
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
            source={{uri:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1'}}
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
            Swastik Hotel Room
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
              1000/
            </Text>
            <Text style={{ fontSize: 18 }}>
              Rs 700
            </Text>
          </View>

          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>King Deluxe Room</Text>
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
