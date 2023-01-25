import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';
import { ProductsStorageDTO } from './ProductsStorageDTO';

export async function productsUpdate(updateProduct: ProductsStorageDTO, list: string) {
  try {
    const storageProduct = await productsGetByList(list);

    const namesFilter = storageProduct.filter(name => name.productName === updateProduct.productName);
    const storage = JSON.stringify(namesFilter);
    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, storage);
  } catch(error) {
    throw error;
  }
}