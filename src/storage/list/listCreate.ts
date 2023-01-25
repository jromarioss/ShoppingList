import AsyncStorage from '@react-native-async-storage/async-storage';

import { listGetAll } from './listGetAll';
import { AppError } from '../../utils/AppError';
import { LIST_COLLECTION } from '../storageConfig';

export interface ListStorageDTO {
  name: string;
  cratedAt: string;
}

export async function listCreate(newList: ListStorageDTO) {
  try {
    const storageList = await listGetAll();

    const listAlreadyExists = storageList.filter(list => list.name === newList.name);

    if (listAlreadyExists.length > 0) {
      throw new AppError("Já existe uma lista cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storageList, newList]);
    await AsyncStorage.setItem(LIST_COLLECTION, storage);
  } catch(error) {
    throw error;
  }
}