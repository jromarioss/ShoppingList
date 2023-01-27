import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';

export async function productsRemoveByList(productName: string, list: string) {
  try {
    const storage = await productsGetByList(list);

    const productToRemove = storage.filter(name => name.productName !== productName);
    
    const products = JSON.stringify(productToRemove);
    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, products);
  } catch(error) {
    throw error;
  }
}