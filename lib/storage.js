// lib/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values'; // MUST be first if using uuid
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'shoppingLists';

/**
 * Data shape:
 * List {
 *  id: string,
 *  title: string,
 *  items: Item[]
 * }
 * Item {
 *  id: string,
 *  title: string,
 *  amount: string,
 *  isChecked: boolean
 * }
 */

const genId = () => {
  try {
    return uuidv4();
  } catch (e) {
    // fallback
    return Math.random().toString(36).slice(2, 10);
  }
};

export const getLists = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('getLists error', e);
    return [];
  }
};

export const saveLists = async (lists) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  } catch (e) {
    console.error('saveLists error', e);
  }
};

export const createList = async (title) => {
  const lists = await getLists();
  const newList = { id: genId(), title, items: [] };
  const updated = [...lists, newList];
  await saveLists(updated);
  return newList;
};

export const deleteList = async (listId) => {
  const lists = await getLists();
  const updated = lists.filter((l) => l.id !== listId);
  await saveLists(updated);
  return updated;
};

export const getList = async (listId) => {
  const lists = await getLists();
  return lists.find((l) => l.id === listId) || null;
};

export const updateList = async (listId, patch) => {
  const lists = await getLists();
  const updated = lists.map((l) => (l.id === listId ? { ...l, ...patch } : l));
  await saveLists(updated);
  return updated.find((l) => l.id === listId) || null;
};

export const addItemToList = async (listId, { title, amount }) => {
  const lists = await getLists();
  const updated = lists.map((l) => {
    if (l.id !== listId) return l;
    const newItem = { id: genId(), title, amount, isChecked: false };
    return { ...l, items: [...l.items, newItem] };
  });
  await saveLists(updated);
  return updated.find((l) => l.id === listId) || null;
};

export const updateItemInList = async (listId, itemId, patch) => {
  const lists = await getLists();
  const updated = lists.map((l) => {
    if (l.id !== listId) return l;
    return {
      ...l,
      items: l.items.map((it) => (it.id === itemId ? { ...it, ...patch } : it)),
    };
  });
  await saveLists(updated);
  return updated.find((l) => l.id === listId) || null;
};

export const deleteItemFromList = async (listId, itemId) => {
  const lists = await getLists();
  const updated = lists.map((l) => {
    if (l.id !== listId) return l;
    return { ...l, items: l.items.filter((it) => it.id !== itemId) };
  });
  await saveLists(updated);
  return updated.find((l) => l.id === listId) || null;
};

