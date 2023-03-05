import { ProductsStorageDTO } from "../storage/products/ProductsStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      editProduct: {
        list: string;
        product: ProductsStorageDTO;
      };
      home: undefined;
      newList: undefined;
      newProduct: {
        list: string;
      };
      listProducts: {
        list: string;
      };
    }
  }
}