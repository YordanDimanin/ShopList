import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <Text style={styles.text}>Details Screen</Text>
          <Text style={styles.text}>{id}</Text>
        </View>
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
