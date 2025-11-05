import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  position: {};
};

const AddNoteButton = () => {
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>New Note</Text>
            <Text style={styles.modalMessage}>
                
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Product Name"
              placeholderTextColor="#888"
              value={listName}
              onChangeText={setListName}
            />

            <TextInput
              style={styles.input}
              placeholder="Category"
              placeholderTextColor="#888"
              value={listName}
              onChangeText={setListName}
            />

            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.actionButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.actionButton, styles.confirmButton]}
                onPress={handleCreateList}
              >
                <Ionicons name="checkmark" size={22} color="#fff" style={{ marginRight: 6 }} />
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle" size={80} color="#3DA35D" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 120,
    right: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#25292E',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 15,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#333840',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 25,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#444A52',
  },
  confirmButton: {
    backgroundColor: '#3DA35D',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default AddNoteButton;
