import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Content, InputPrice, Input, InputUnity, Text, Title, ViewInput } from './styles';

import { Button } from '../../components/Button';
import { HeaderWithButton } from '../../components/HeaderWithButton';

import { productsAddByList } from '../../storage/products/productsAddByList';
import { ProductsStorageDTO } from '../../storage/products/ProductsStorageDTO';

interface RouteParams {
  list: string;
}

export function RegisterProduct() {
  const [productName, setProductName] = useState('');
  const [productUnity, setProductUnity] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const route = useRoute();
  const navigation = useNavigation();

  const { list } = route.params as RouteParams;

  async function handleNewProduct() {
    try {

      const newProduct: ProductsStorageDTO = {
        productName: productName,
        unity: Number(productUnity),
        price: Number(productPrice),
        done: false,
      }

      await productsAddByList(newProduct, list);
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
          Novo Produto
        </Title>
        <Text>
          Adicionar produtos na lista de {list}
        </Text>

        <Input 
          placeholder="Nome do produto"
          placeholderTextColor="#C2C2C2"
          onChangeText={setProductName}
          value={productName}
        />

        <ViewInput>
          <InputPrice 
            placeholder="Preço R$" 
            placeholderTextColor="#C2C2C2"
            keyboardType="number-pad"
            onChangeText={setProductPrice}
            value={productPrice}
            />
          <InputUnity 
            placeholder="Unidade" 
            placeholderTextColor="#C2C2C2"
            keyboardType="number-pad"
            onChangeText={setProductUnity}
            value={productUnity}
            />
        </ViewInput>

        <Button title="Salvar produto" onPress={handleNewProduct} />
      </Content>
    </Container>
  );
}