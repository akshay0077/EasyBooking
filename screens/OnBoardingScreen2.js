// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const OnBoardingScreen2 = ({ navigation }) => {
//   const handleNext = () => {
//     navigation.navigate('OnBoarding3');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={require('../assets/onboard/first.jpg')}
//           style={styles.image}
//           resizeMode="cover"
//         />
//       </View>
//       <Text style={styles.slogan}>Your Perfect Stay Awaits</Text>
//       <Text style={styles.description}>
//         Browse through a wide selection of hotels and find your ideal
//         accommodation for a memorable stay.
//       </Text>
//       <TouchableOpacity style={styles.button} onPress={handleNext}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default OnBoardingScreen2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 40,
//   },
//   imageContainer: {
//     width: '90%',
//     height: 200,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   slogan: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 40,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     borderRadius: 10,
//     width: '80%',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

const OnBoardingScreen2 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    navigation.navigate('OnBoarding3');
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/onboard/first.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.slogan}>Your Perfect Stay Awaits</Text>
      <Text style={styles.description}>
        Browse through a wide selection of hotels and find your ideal
        accommodation for a memorable stay.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default OnBoardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  imageContainer: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  slogan: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
