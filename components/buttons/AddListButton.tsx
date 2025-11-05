import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, } from 'react-native';
import AddListModal from '../modals/AddListModal';

const AddButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState('');

  const handleCreateList = () => {
    if (!listName.trim()) {
      Alert.alert('Please enter a list name.');
      return;
    }

    // Here you’d handle saving/creating the shopping list
    Alert.alert('List Created!', `Your new list "${listName}" has been added.`);
    setListName('');
    setModalVisible(false);
  };

  return (
    <>
      <AddListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        listName={listName}
        setListName={setListName}
        handleCreateList={handleCreateList}
      />

      <Pressable style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle" size={80} color="#3DA35D" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 20,
  }
});

export default AddButton;
