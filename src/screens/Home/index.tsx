import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { Items } from '../../components/Items';
import { Total } from '../../components/Total';

export interface ItemsProps {
  product: string;
  unity: number;
  price: number;
  done?: boolean;
}

export function Home() {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [productName, setProductName] = useState('');
  const [unity, setUnity] = useState('');
  const [price, setPrice] = useState('');

  const itemsCounts = items.reduce((acc, item) => {
    if (item.done) {
      acc.done++;
    }
    acc.total++
    return acc;
  }, {
    done: 0,
    total: 0,
  });

  const totalPrice = items.reduce((acc, curr) => acc + (curr.price * curr.unity), 0);

  function handleAddNewItem() {
    const productAlreadyExists = items.find(item => item.product === productName);

    if (productAlreadyExists) {
      return Alert.alert('Produto já existe!', 'Esté produto já consta na sua lista.');
    }

    if (productName === '') {
      return Alert.alert('Preencha todos os campos!', 'Preencha todos os campos para adicionar um produto na sua lista.');
    }

    if (unity === '') {
      return Alert.alert('Preencha todos os campos!', 'Preencha todos os campos para adicionar um produto na sua lista.');
    }

    if (price === '') {
      return Alert.alert('Preencha todos os campos!', 'Preencha todos os campos para adicionar um produto na sua lista.');
    }

    const newProduct: ItemsProps = {
      product: productName,
      unity: Number(unity),
      price: Number(price),
    }

    setItems(state => [...state, newProduct]);
    setProductName('');
    setUnity('');
    setPrice('');
  }

  function handleMakeDone(product: string) {
    setItems(items.map(item => {
      if (item.product === product) {
        item.done = !item.done;
      }

      return item;
    }));
  }

  function handleDelete(product: string) {
    Alert.alert('Apagar produto', `Deseja apagar o produto ${product}`, [
      {
        text: 'Sim',
        onPress: () => setItems(state => state.filter(item => item.product !== product)),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputItem}
            placeholder='Adicionar item na lista'
            placeholderTextColor='#C2C2C2'
            onChangeText={setProductName}
            value={productName}
          />

          <TextInput
            style={styles.inputUnity}
            placeholder='Unidade'
            placeholderTextColor='#C2C2C2'
            onChangeText={setUnity}
            value={unity}
          />

          <TextInput
            style={styles.inputPrice}
            placeholder='Preço'
            placeholderTextColor='#C2C2C2'
            onChangeText={setPrice}
            value={price}
          />

        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddNewItem}>
          <Text style={styles.buttonText}>Adicionar produto</Text>
        </TouchableOpacity>

        {itemsCounts.total !== 0 && (
          <View style={styles.itemsCount}>
            <View style={styles.itemCount}>
              <Text style={styles.itemText}>Produtos</Text>
              <View style={styles.itemNumber}>
                <Text style={styles.itemNumberText}>{itemsCounts.total}</Text>
              </View>
            </View>
      
            <View style={styles.itemCount}>
              <Text style={styles.itemText}>Selecionados</Text>
              <View style={styles.itemNumber}>
                <Text style={styles.itemNumberText}>{itemsCounts.done}</Text>
              </View>
            </View>
          </View>
        )}

        <Items item={items} onMakeDone={handleMakeDone} onDelete={handleDelete} />

        {itemsCounts.total !== 0 &&
          <Total priceTotal={totalPrice.toFixed(2)} />
        }
      </View>
    </View>
  );
}