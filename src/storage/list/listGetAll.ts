import AsyncStorage from "@react-native-async-storage/async-storage";

import { LIST_COLLECTION } from '../storageConfig';
import { ListStorageDTO } from "./ListStorageDTO";

export async function listGetAll() {
  try {
    const storage = await AsyncStorage.getItem(LIST_COLLECTION);
    const lists: ListStorageDTO[] = storage ? JSON.parse(storage) : [];
    return lists
  } catch(error) {
    throw error;
  }
}