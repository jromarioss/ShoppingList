import { Feather } from '@expo/vector-icons'; 
import { Alert, TouchableOpacity } from 'react-native';

import { Container, Info, TextItem, TextItemName, TextItemLineThrough } from './styled';

import { ProductsStorageDTO } from '../../../../storage/products/ProductsStorageDTO';

interface RouteParams {
  list: string;
}

interface ListOfProductsProps {
  data: ProductsStorageDTO;
  onHandleMarkDone: (product: string) => void;
  onHandleRemove: (productName: string) => void;
  onHandleEdit: (product: any) => void;
}

export function ListOfProducts({ data, onHandleMarkDone, onHandleRemove, onHandleEdit }: ListOfProductsProps) {

  function handleProductRemove() {
    Alert.alert(
      "Remover Produto",
      `Deseja remover o produto ${data.productName}`,
      [
        { text: "Não", style: "cancel"},
        { text: "Sim", onPress: () => onHandleRemove(data.productName) }
      ]
    );
  }

  async function handleEdit() {
    onHandleEdit(data)
  }

  async function markDone() {
    onHandleMarkDone(data.productName);
  }

  return (
    <Container>
        {!data.done ?
          <TouchableOpacity>
            <Feather name="circle" size={32} color="#C2C2C2" onPress={markDone} />
          </TouchableOpacity>
          :
          <TouchableOpacity>
            <Feather name="check-circle" size={32} color="#C2C2C2" onPress={markDone} />
          </TouchableOpacity>
        }

        <TextItem>{data.unity}</TextItem>

        {!data.done ?
          <TextItemName numberOfLines={1}>{data.productName}</TextItemName>
          :
          <TextItemLineThrough numberOfLines={1}>{data.productName}</TextItemLineThrough>
        }
        
      <Info>
        <TextItem>R$ {data.price.toFixed(2)}</TextItem>

        <TouchableOpacity style={{ marginRight: 4 }} onPress={handleEdit}>
          <Feather name="edit" size={32} color="#C2C2C2" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleProductRemove}>
          <Feather name="trash" size={32} color="#C2C2C2" />
        </TouchableOpacity>
      </Info>
    </Container>
  );
}