import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Content, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Title>Lista de Compra</Title>
        <FontAwesome5 name="shopping-cart" size={24} color="white" />
      </Content>
    </Container>
  );
}