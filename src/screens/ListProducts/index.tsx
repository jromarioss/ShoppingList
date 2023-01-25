import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { ListEmpty } from '../../components/ListEmpty';
import { ListOfProducts } from './components/ListOfProducts';

import { Container, CountArea, CountAreaInsinde, CountName, CountNumber, CountNumberArea, Text, Title, LineThrough, TotalArea, TotalPrice } from './styles';
import { Header } from './components/Header';
import { listToRemoveByName } from '../../storage/list/listToRemoveByName';
import { productsGetByList } from '../../storage/products/productsGetByList';
import { ProductsStorageDTO } from '../../storage/products/ProductsStorageDTO';
import { productsRemoveByList } from '../../storage/products/productsRemoveByList';
import { Loading } from '../../components/Loading';
import { productsUpdate } from '../../storage/products/productsUpdate';

interface RouteParams {
  list: string;
}

export function ListProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductsStorageDTO[]>([]);
  const route = useRoute();

  const { list } = route.params as RouteParams;

  const navigation = useNavigation();

  const productsCounts = products.reduce((acc, item) => {
    if(item.done) {
      acc.done++
    }
    acc.total++
    return acc;
  }, {
    done: 0,
    total: 0
  });

  const totalPrice = products.reduce((acc, curr) => acc + (curr.price * curr.unity), 0);

  function handleNewProduct() {
    navigation.navigate('newProduct', { list });
  }

  /* function handleMarkeDone(product: string) {
    setProducts(products.map((item) => {
      if (item.productName === product) {
        item.done = !item.done;
      }
      return item;
    }));
  } */
  function handleMarkeDone(product: string) {
    try {
      products.map(async (item) => {
        if (item.productName === product) {
          item.done = !item.done;
        }
        console.log(item);
        return await productsUpdate(item, list);
      });
    } catch(error) {
      console.log(error)
    }
  } 
  
  async function listRemove() {
    try {
      setIsLoading(true);
      await listToRemoveByName(list);
      navigation.navigate("home")
    } catch(error) {
      console.log(error);
      Alert.alert("Remover lista", "Não foi possível remover a lista");
    } finally {
      setIsLoading(false)
    }
  }

  function handleListToRemove() {
    Alert.alert(
      "Remover",
      "Deseja remover a lista?",
      [
        { text: "Não", style: "cancel"},
        { text: "Sim", onPress: () => listRemove() }
      ]
    );
  }

  async function handleRemoveProductName(productName: string) {
    try {
      await productsRemoveByList(productName, list);
      fetchProductByList();
    } catch(error) {
      console.log(error);
      Alert.alert("Remover produto", "Não foi possível remover a pessoa");
    }
  }

  async function fetchProductByList() {
    try {
      const productsByList = await productsGetByList(list);
      setProducts(productsByList);
    } catch(error) {
      console.log(error);
      Alert.alert("Produtos", "Não foi possível carregar os produtos da lista selecionado.");
    }
  }

  useFocusEffect(useCallback(() => {
    fetchProductByList();
  }, []));

  return (
    <Container>
      <Header />
        <Title>
          {list}
        </Title>

        <Text>
          Adicione produtos na sua lista
        </Text>

        <Button title="Adiconar produtos" onPress={handleNewProduct} />

        {products.length !== 0 && (
          <CountArea>
            <CountAreaInsinde>
              <CountName>Produtos</CountName>

              <CountNumberArea>
                <CountNumber>
                  {productsCounts.total}
                </CountNumber>
              </CountNumberArea>
            </CountAreaInsinde>

            <CountAreaInsinde>
              <CountName>Selecionado</CountName>

              <CountNumberArea>
                <CountNumber>
                  {productsCounts.done}
                </CountNumber>
              </CountNumberArea>
            </CountAreaInsinde>
          </CountArea>
        )}

        <LineThrough />
        
        {isLoading ?
          <Loading />
          :
          <FlatList 
            data={products}
            keyExtractor={item => item.productName}
            renderItem={({ item }) => (
              <ListOfProducts data={item} onHandleMarkDone={handleMarkeDone} onHandleRemove={handleRemoveProductName}  />
            )}
            ListEmptyComponent={() => (
              <ListEmpty
                style={{ marginTop: 64, flex: 1 }}
                title="Lista de produtos vazia"
                text="Adicone um produto em sua lista para começar"
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        }
        
        {products.length !== 0 && (
          <TotalArea>
            <TotalPrice>Total de gastos</TotalPrice>
            <TotalPrice>R$ {totalPrice.toFixed(2)}</TotalPrice>
          </TotalArea>
        )}

        <Button title="Excluir lista" type="DANGER" style={{ marginBottom: 16 }} onPress={handleListToRemove} />
    </Container>
  );
}