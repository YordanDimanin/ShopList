import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
  itemTitle: string;
};

const DeleteItemModal = ({ visible, onClose, onDelete, itemTitle }: Props) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Delete Item</Text>
          <Text style={styles.modalText}>
            Are you sure you want to delete "{itemTitle}"?
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.deleteButton]} onPress={onDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#3F454C',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: '#E6E9ED',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    color: '#E6E9ED',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#555',
  },
  deleteButton: {
    backgroundColor: '#D9534F',
  },
  buttonText: {
    color: '#E6E9ED',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeleteItemModal;