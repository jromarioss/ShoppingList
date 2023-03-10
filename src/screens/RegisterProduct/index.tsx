import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Content, InputPrice, Input, InputUnity, Text, Title, ViewInput } from './styles';

import { Button } from '../../components/Button';
import { HeaderWithButton } from '../../components/HeaderWithButton';

import { productsAddByList } from '../../storage/products/productsAddByList';
import { ProductsStorageDTO } from '../../storage/products/ProductsStorageDTO';
import { AppError } from '../../utils/AppError';

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
      if (productName.trim().length === 0) {
        return Alert.alert("Novo Produto", "Preencha todos os Campos");
      }

      if (productUnity === '') {
        return Alert.alert("Novo Produto", "Preencha todos os Campos");
      }

      if (productPrice === '') {
        return Alert.alert("Novo Produto", "Preencha todos os Campos");
      }

      const pPrice = Number(productPrice.replace(',', '.'));

      const id = String(new Date().getTime())

      const newProduct: ProductsStorageDTO = {
        id: id,
        productName: productName,
        unity: Number(productUnity),
        price: pPrice,
        done: false,
      }

      await productsAddByList(newProduct, list);
      navigation.navigate('listProducts', { list });
    } catch(error) {
      if (error instanceof AppError) {
        Alert.alert("Nova lista", error.message);
      } else {
        Alert.alert("Nova lista", "Não foi possível cirar uma nova lista.");
        console.log(error);
      }
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
          maxLength={30}
        />

        <ViewInput>
          <InputPrice 
            placeholder="Preço R$" 
            placeholderTextColor="#C2C2C2"
            keyboardType="number-pad"
            onChangeText={setProductPrice}
            value={productPrice}
            maxLength={8}
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

        <Button title="Salvar produto" onPress={handleNewProduct} />
      </Content>
    </Container>
  );
}