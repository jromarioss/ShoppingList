import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLECTION } from '../storageConfig';

export async function listGetAll() {
  try {
    const storage = await AsyncStorage.getItem(LIST_COLLECTION);
    const lists: string[] = storage ? JSON.parse(storage) : [];
    return lists
  } catch(error) {
    throw error;
  }
}