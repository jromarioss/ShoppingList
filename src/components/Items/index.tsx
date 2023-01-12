import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';

import trash from '../../assets/trash.png';
import clipBoard from '../../assets/ClipboardText.png';
import checkedImg from '../../assets/checked.png';

import { styles } from './styles';
import { ItemsProps } from '../../screens/Home';

interface Props {
  item: ItemsProps[];
  onMakeDone: (product: string) => void;
  onDelete: (product: string) => void;
}

export function Items({ item, onMakeDone, onDelete }: Props) {

  return (
    <>
      <View style={styles.container}>
        <FlatList 
          data={item}
          keyExtractor={item => item.product}
          renderItem={({ item }) => (
            <View style={styles.item} key={item.product}>
              {!item.done ?
                <Checkbox
                  onValueChange={() => onMakeDone(item.product)}
                  style={styles.rdChecked}
                />
                :  
                <TouchableOpacity onPress={() => onMakeDone(item.product)}>
                  <Image
                    source={require=(checkedImg)}
                    style={styles.rdCheckedImg}
                  />
                </TouchableOpacity>
              }
              
              <View style={styles.textItem}>
                <Text style={styles.textUnity}>{item.unity}</Text>

                {!item.done ?
                  <Text style={styles.textProduct}>{item.product}</Text>
                  :
                  <Text style={styles.textProductLineThrough}>{item.product}</Text>
                }
                
                <Text style={styles.textPrice}>R$ {item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => onDelete(item.product)}>
                <AntDesign
                  name='delete'
                  size={28}
                  style={styles.buttonDelete}
                />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyArea}>
              <View style={styles.line}></View>
              <Text style={styles.emptyTitle}>Nenhum item na sua lista de compras</Text>
              <Text style={styles.emptyText}>Adicione um item na sua lista para começar</Text>
              <View style={styles.emptyImage}>
                <Image
                  source={require=(clipBoard)}
                />
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}