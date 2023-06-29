import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

const OnBoardingScreen1 = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(100)).current;

  const handleNext = () => {
    navigation.navigate('OnBoarding2');
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateY]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/onboard/zero.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Animated.Text style={[styles.title, { transform: [{ translateY: translateY }] }]}>
        Welcome to EasyBooking
      </Animated.Text>
      <Animated.Text style={[styles.description, { transform: [{ translateY: translateY }] }]}>
        Discover and book hotels easily with our user-friendly application.
      </Animated.Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.developedByText}>Developed by IT Craft Solution</Text>
    </Animated.View>
  );
};

export default OnBoardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  imageContainer: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
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
  developedByText: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
  },
});
