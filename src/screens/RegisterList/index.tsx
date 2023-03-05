import dayjs from 'dayjs';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Input, Text, Title } from './styles';

import { AppError } from '../../utils/AppError';

import { Button } from '../../components/Button';
import { HeaderWithButton } from '../../components/HeaderWithButton';

import { listCreate } from '../../storage/list/listCreate';
import { ListStorageDTO } from '../../storage/list/ListStorageDTO';

export function RegisterList() {
  const [list, setList] = useState('');
  const navigation = useNavigation();

  const dayFormated = dayjs().format('DD/MM/YYYY');

  async function handleNewList() {
    try {
      if (list.trim().length === 0) {
        return Alert.alert("Nova lista", "Informe o nome da lista.");
      }

      const newDate = dayjs(new Date()).format('DD/MM/YYYY');

      const newList: ListStorageDTO = {
        name: list,
        cratedAt: newDate,
      }
      
      await listCreate(newList);
      navigation.navigate("listProducts", { list: newList.name })
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
          Nova Lista
        </Title>
        <Text>
          Criar uma lista para adicionar produtos
        </Text>

        <Input
          placeholder="Nome da lista de compra"
          placeholderTextColor="#C2C2C2"
          onChangeText={setList}
          maxLength={13}
        />

        <Button title="Criar lista" onPress={handleNewList} />
      </Content>
    </Container>
  );
}