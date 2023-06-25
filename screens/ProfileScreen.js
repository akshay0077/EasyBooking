import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topImage}>
        <Image
          source={require("../assets/Akshay.jpeg")}
          style={styles.topImageStyle}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.name}> Akshay Kher</Text>
        <Text style={styles.bio}>React & React Native Developer</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          Experienced React & React Native Developer with a demonstrated history
          of working in the computer software industry. Skilled in HTML, CSS,
          JavaScript & ES6, React Js, React Native, React-Routing, React-Redux,
          Git, Github,and Data Structure Algorithms. Strong engineering
          professional with a Master's degree focused in Computer Science from
          DDU
        </Text>
        <Text style={styles.sectionTitle}>Social Media</Text>
        <View style={styles.socialLinks}>
          <Text style={styles.socialLink}>Twitter</Text>
          <Text style={styles.socialLink}>LinkedIn</Text>
          <Text style={styles.socialLink}>GitHub</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  topImage: {
    marginTop: 30,
    marginLeft: 80,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  topImageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: "#777",
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 16,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialLink: {
    fontSize: 16,
    color: "#007aff",
    marginRight: 16,
  },
});

export default ProfileScreen;
