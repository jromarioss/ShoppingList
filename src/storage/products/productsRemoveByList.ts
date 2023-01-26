import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';

export async function productsRemoveByList(productNm: string, list: string) {
  try {
    const storage = await productsGetByList(list);

    const nameToRemove = storage.filter(name => name.productName !== productNm);
    const products = JSON.stringify(nameToRemove);

    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, products);
  } catch(error) {
    throw error;
  }
}