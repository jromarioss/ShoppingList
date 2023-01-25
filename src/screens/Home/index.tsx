import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { List } from './components/List';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { ListEmpty } from '../../components/ListEmpty';

import { Container, LineThrough, } from './styles';
import { listGetAll } from '../../storage/list/listGetAll';
import { Loading } from '../../components/Loading';
import { ListStorageDTO } from '../../storage/list/listCreate';

export function Home() {
  const [list, setList] = useState<ListStorageDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();


  function handleNewList() {
    navigation.navigate('newList');
  }

  function handleGoToListOfProduct(list: string) {
    navigation.navigate('listProducts', { list });
  }
  console.log(list)

  async function fetchLists() {
    try {
      setIsLoading(true);
      const data = await listGetAll();
      setList(data);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchLists();
  }, []));

  return (
    <>
      <Header />
      <Container>
        <Button
          style={{ marginTop: -52 }}
          title="Criar nova lista"
          onPress={handleNewList}
        />

        <LineThrough />

        {isLoading ?
          <Loading />
          :
          <FlatList
            data={list}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <List data={item} onPress={() => handleGoToListOfProduct(item.name)} />
            )}
            ListEmptyComponent={() => (
              <ListEmpty
                title="Não há lista de compras"
                text="Adicione uma lista de compras para começar"
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        }
        
      </Container>
    </>
  );
}