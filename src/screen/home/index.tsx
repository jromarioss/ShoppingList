import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Products } from "../../components/Products";
import { styles } from "./styles";

export function Home() {
  const [products, setProducts] = useState<string[]>([]);
  const [productName, setProductName] = useState('');

  function handleAddProducts() {
    if(products.includes(productName)) {
      return Alert.alert("Produto já existente!", "Este produto já existe na lista.");
    }

    setProducts(state => [...state, productName]);
    setProductName('');
  }

  function handleRemoveProduct(data: string) {
    Alert.alert("Remover item", `Deseja remover o ${data} da sua lista?`, [
      {
        text: 'Sim',
        onPress: () => setProducts(state => state.filter(product => product !== data))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Lista de Compra
      </Text>
      <Text style={styles.infoText}>
        Informe os produtos que deseja comprar para adicionar há sua lista de compra.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"
          placeholderTextColor="#444"
          onChangeText={setProductName}
          value={productName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProducts}>
          <Text style={styles.buttonText}>
            Adicionar
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {products.length > 0 ? 
          <Text style={styles.textAmountProduct}>
            Na sua Lista tem {products.length} Produtos.
          </Text>
          :
          < >
          </>
        }
      </View>

      <FlatList 
        data={products}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Products
            key={item}
            name={item}
            onRemove={() => handleRemoveProduct(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.textEmpyt}>Lista de produtos vazia.</Text>
        )}
      />
    </View>
  );
}