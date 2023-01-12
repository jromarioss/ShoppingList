import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textColor}>
          Lista de Compra
        </Text>
        <Image
          source={require('../../assets/ShoppingCart.png')}
        />
      </View>
    </View>
  );
}