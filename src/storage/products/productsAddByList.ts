import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppError } from '../../utils/AppError';
import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';
import { ProductsStorageDTO } from './ProductsStorageDTO';

export async function productsAddByList(newProduct: ProductsStorageDTO, list: string) {
  try {
    const storageProduct = await productsGetByList(list);

    const productAlreadyExists = storageProduct.filter(product => product.productName === newProduct.productName);

    if (productAlreadyExists.length > 0) {
      throw new AppError("Esse produto já está adicionado na sua lista.");
    }

    const storage = JSON.stringify([...storageProduct, newProduct]);
    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, storage);
  } catch(error) {
    throw error;
  }
}