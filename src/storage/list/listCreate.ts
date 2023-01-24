import AsyncStorage from '@react-native-async-storage/async-storage';

import { listGetAll } from './listGetAll';
import { AppError } from '../../utils/AppError';
import { LIST_COLLECTION } from '../storageConfig';

export async function listCreate(newList: string) {
  try {
    const storageList = await listGetAll();

    const listAlreadyExists = storageList.includes(newList);

    if (listAlreadyExists) {
      throw new AppError("Já existe uma lista cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storageList, newList]);
    await AsyncStorage.setItem(LIST_COLLECTION, storage);
  } catch(error) {
    throw error;
  }
}