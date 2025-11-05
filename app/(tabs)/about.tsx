import React from 'react';
import { Linking, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>About CartMate</Text>
        <Text style={styles.text}>Thank you for using CartMate!</Text>
        <Text style={styles.text}>CartMate is a simple and intuitive shopping list application designed to help you keep track of your groceries and other shopping needs.</Text>
        <Text style={styles.text}>Developed by Yordan Dimanin</Text>

        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://github.com/YordanDimanin/CartMate')}
        >
          Visit our GitHub Repository
        </Text>

        <Text style={styles.text}>This app is fully free and open source.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  contentContainer: {
    backgroundColor: '#3F454C',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E6E9ED',
    marginBottom: 20,
  },
  text: {
    color: '#E6E9ED',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    lineHeight: 24,
  },
  link: {
    color: '#4CAF50', // green link
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AboutScreen;
