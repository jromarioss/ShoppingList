import AsyncStorage from '@react-native-async-storage/async-storage';

import { LIST_COLLECTION, PRODUCTS_COLLECTION } from '../storageConfig';

import { listGetAll } from './listGetAll';

export async function listToRemoveByName(listToRemove: string) {
  try {
    const storageList = await listGetAll();
    const lists = storageList.filter(list => list !== listToRemove);
    await AsyncStorage.setItem(LIST_COLLECTION, JSON.stringify(lists));
    await AsyncStorage.removeItem(`${PRODUCTS_COLLECTION}-${listToRemove}`);
  } catch(error) {
    throw error;
  }
}