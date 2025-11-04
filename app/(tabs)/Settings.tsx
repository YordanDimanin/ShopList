import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Settings = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
    </SafeAreaView>
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