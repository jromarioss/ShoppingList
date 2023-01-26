import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS_COLLECTION } from '../storageConfig';
import { productsGetByList } from './productsGetByList';

export async function productsUpdate(updateProduct: string, list: string) {
  try {
    const storageProduct = await productsGetByList(list);

    //const productFilter = storageProduct.filter(name => name.productName === updateProduct);
    
    const productUpdated = storageProduct.filter(item => {
      if (item.productName == updateProduct) {
        item.done = !item.done;
      }
      return item
    });

    const storage = JSON.stringify(productUpdated);
    AsyncStorage.setItem(`${PRODUCTS_COLLECTION}-${list}`, storage);
  } catch(error) {
    throw error;
  }
}