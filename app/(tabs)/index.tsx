import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddButton from "../../components/buttons/AddListButton";
import Card from "../../components/Card";

export default function Index() {
  return (
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView>
              <View>
                <Text style={styles.text}>Shopping Lists</Text>
                <Card title="Храна" id="1"/>
                <Card title="Дрехи" id="2"/>
                <Card title="Игри" id="3"/>
                <Card title="Яки неща" id="4"/>
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
