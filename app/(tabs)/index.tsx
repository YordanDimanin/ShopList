import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text style={styles.text}>Text</Text>
        </View>
        <StatusBar barStyle="light-content" backgroundColor="#25292e" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'

  }
})
