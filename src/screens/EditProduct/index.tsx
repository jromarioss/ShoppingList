import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Content, InputPrice, Input, InputUnity, Title, ViewInput } from './styles';

import { Button } from '../../components/Button';
import { HeaderWithButton } from '../../components/HeaderWithButton';


import { productToEdit } from '../../storage/products/productsUpdate';
import { ProductsStorageDTO } from '../../storage/products/ProductsStorageDTO';

interface RouteParams {
  list: string;
  product: ProductsStorageDTO;
}

export function EditProduct() {
  const route = useRoute();
  const { list, product } = route.params as RouteParams;

  const [productName, setProductName] = useState(product.productName);
  const [productUnity, setProductUnity] = useState(product.unity.toString());
  const [productPrice, setProductPrice] = useState(product.price.toString());

  const navigation = useNavigation();

  async function handleEditProduct() {
    const pPrice = Number(productPrice.replace(',', '.'));

    try {
      const editProduc = {
        id: product.id,
        productName: productName,
        unity: Number(productUnity),
        price: pPrice,
        done: product.done,
      }

      await productToEdit(editProduc, list);
      navigation.goBack();
    } catch(error) {
      console.log(error);
      Alert.alert("Novo produto", "Não foi possível adicionar o novo produto.");
    }
  }

  return (
    <Container>
      <HeaderWithButton />
      <Content>
        <Title>
          Editar Produto
        </Title>

        <Input 
          placeholder="Nome do produto"
          placeholderTextColor="#C2C2C2"
          onChangeText={setProductName}
          value={productName}
          maxLength={30}
        />

        <ViewInput>
          <InputPrice 
            placeholder="Preço R$" 
            placeholderTextColor="#C2C2C2"
            keyboardType="number-pad"
            onChangeText={setProductPrice}
            value={productPrice}
            maxLength={6}
          />
          <InputUnity 
            placeholder="Unidade" 
            placeholderTextColor="#C2C2C2"
            keyboardType="number-pad"
            onChangeText={setProductUnity}
            value={productUnity}
            maxLength={3}
          />
        </ViewInput>

        <Button title="Editar produto" onPress={handleEditProduct} />
      </Content>
    </Container>
  );
}