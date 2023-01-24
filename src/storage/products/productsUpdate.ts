import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';
import { ProductsStorageDTO } from './ProductsStorageDTO';

export async function productsUpdate(updateProduct: ProductsStorageDTO, list: string) {
  try {
    const storageProduct = await productsGetByList(list);

    const update = storageProduct.filter(product => product.productName === updateProduct.productName);

    const makeDone = update.map(item => {
      if (item.productName === updateProduct.productName) {
        item.done = !item.done;
      }
      return item;
    });

    const storage = JSON.stringify(makeDone)
    await AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, storage);
  } catch(error) {
    throw error;
  }
}