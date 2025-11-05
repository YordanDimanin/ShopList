import AddNoteButton from "@/components/AddNoteButton";
import Checkbox from 'expo-checkbox';
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {

  const { id } = useLocalSearchParams();

  const [isChecked, setChecked] = useState(false);
  
  return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={{}}>
          <FlatList
            data={[
              {key: '1', amaunt: '1', title: 'Храна'},
              {key: '2', amaunt: '1', title: 'Филтри'},
              {key: '3', amaunt: '1', title: 'Листчета'},
              {key: '4', amaunt: '1', title: 'Бутчета'},
              {key: '5', amaunt: '1', title: 'Моркова'},
              
            ]}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10}}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.amaunt}</Text>
              </View>
            )}
          />
        </View>
        <AddNoteButton/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#25292e',
    alignContent: 'center',
    paddingTop: 20,
    position: 'relative'
  },
  text: {
    color: '#E6E9ED',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 20,
  }
})
