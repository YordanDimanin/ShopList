import AddNoteButton from "@/components/buttons/AddNoteButton";
import Checkbox from 'expo-checkbox';
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {

  const { id } = useLocalSearchParams();

  const [isChecked, setChecked] = useState(false);

  const handleLongPress = () => {
    alert('Delete this shopping list')
  }
  
  return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={{}}>
          <FlatList
            data={[
              {key: '1', amaunt: '1', title: 'Филтри'},
              {key: '2', amaunt: '4', title: 'Листчета'},
              {key: '3', amaunt: '2', title: 'Бутчета'},
              {key: '4', amaunt: '5', title: 'Моркова'},
              
            ]}
            renderItem={({item}) => (
              <Pressable onLongPress={handleLongPress} style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 80 ,paddingVertical: 10}}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.amaunt}</Text>
              </Pressable>
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
