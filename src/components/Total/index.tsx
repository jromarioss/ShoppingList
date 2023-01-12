import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { styles } from './styles';

export function Total({ priceTotal }: any) {
  return (
    <View style={styles.container}>
      <AntDesign name='calculator' color='#757575' size={42} />
      <Text style={styles.text}>Total</Text>
      <Text style={styles.textPrice}>R$ {priceTotal}</Text>
    </View>
  );
}