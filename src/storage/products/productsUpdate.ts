import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { ProductsStorageDTO } from './ProductsStorageDTO';

export async function productsUpdate(updateProducts: ProductsStorageDTO[], list: string) {
  try {
    const storage = JSON.stringify(updateProducts);
    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, storage);
  } catch(error) {
    throw error;
  }
}