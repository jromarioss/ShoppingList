import { ProductsStorageDTO } from "../storage/products/ProductsStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newList: undefined;
      newProduct: {
        list: string;
      };
      listProducts: {
        list?: string;
      };
    }
  }
}