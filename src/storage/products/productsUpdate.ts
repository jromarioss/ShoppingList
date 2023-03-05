import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '../../utils/AppError';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';
import { ProductsStorageDTO } from './ProductsStorageDTO';

export async function productsUpdate(updateProducts: ProductsStorageDTO[], list: string) {
  try {
    const storage = JSON.stringify(updateProducts);
    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, storage);
  } catch(error) {
    throw error;
  }
}

export async function productToEdit(updateProduct: ProductsStorageDTO, list: string) {
  try {
    const storage = await productsGetByList(list);

    const productToEdit = storage.filter(product => product.id === updateProduct.id);

    if (productToEdit.length > 0) {
      const product = JSON.stringify(updateProduct);

      await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, product);
    } 
  } catch(error) {
    throw error;
  }
}