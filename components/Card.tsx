// Imports
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

// Types
type Props = {
  title: string;
  id: string;
};

// Component
const Card = ({ title, id }: Props) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/${id}`);
  };

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={handlePress}
      onLongPress={() => alert('Delete this shopping list')}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3F454C',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: '#E6E9ED',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Card;
