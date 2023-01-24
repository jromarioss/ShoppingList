import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { ProductsStorageDTO } from './ProductsStorageDTO';

export async function productsGetByList(list: string) {
  try{
    const storage = await AsyncStorage.getItem(`${PRODUCTS_COLLECTION}-${list}`);
    const products: ProductsStorageDTO[] = storage ? JSON.parse(storage) : [];
    return products;
  } catch(error) {
    throw error;
  }
}