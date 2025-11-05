import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddButton from "../../components/AddButton";
import Card from "../../components/Card";

export default function Index() {
  return (
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView>
              <View>
                <Text style={styles.text}>Shopping Lists</Text>
                <Card title="Groceries" id="groceries"/>
              </View>
            <StatusBar barStyle="light-content" backgroundColor="#25292e" />
          </ScrollView>
          <AddButton/>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#25292e',
    alignContent: 'center',
    paddingTop: 20
  },
  text: {
    color: '#E6E9ED',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 10
  }
})
