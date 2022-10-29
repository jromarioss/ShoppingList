import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ProductsProps  {
  name: string;
  onRemove: () => void;
}

export function Products({ name, onRemove }: ProductsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.product}>
        { name }
      </Text>
      <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
        <Text style={styles.buttonTextEmpyt}>
          Remover
        </Text>
      </TouchableOpacity>
    </View>
  );
}