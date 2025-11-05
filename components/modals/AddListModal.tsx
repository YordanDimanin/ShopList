import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
};

const AddListModal = ({ visible, onClose, onSave }: Props) => {
  const [listName, setListName] = useState('');

  const handleSave = () => {
    if (listName.trim()) {
      onSave(listName.trim());
      setListName('');
      onClose();
    }
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>New Shopping List</Text>
            <Text style={styles.modalMessage}>
              Enter a name for your shopping list below.
            </Text>

            <TextInput
              style={styles.input}
              placeholder="e.g. Weekend Groceries"
              placeholderTextColor="#888"
              value={listName}
              onChangeText={setListName}
            />

            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.actionButton, styles.cancelButton]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.actionButton, styles.confirmButton]}
                onPress={handleSave}
              >
                <Ionicons name="checkmark" size={22} color="#fff" style={{ marginRight: 6 }} />
                <Text style={styles.buttonText}>Create</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 40,
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

export default AddListModal;
