import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonBack } from './styles';

export function Header() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <ButtonBack onPress={handleBackToHome}>
        <FontAwesome5 name="chevron-left" size={24} color="white" />
      </ButtonBack>
      <FontAwesome5 name="shopping-cart" size={24} color="white" />
    </Container>
  );
}