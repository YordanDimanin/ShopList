import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const Settings = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text style={styles.text}>Settings</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
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

export default Settings;