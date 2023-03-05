import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EditProduct } from '../screens/EditProduct';
import { Home } from '../screens/Home';
import { ListProducts } from '../screens/ListProducts';
import { RegisterList } from '../screens/RegisterList';
import { RegisterProduct } from '../screens/RegisterProduct';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouter() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="editProduct"
        component={EditProduct}
      />

      <Screen 
        name="listProducts"
        component={ListProducts}
      />

      <Screen 
        name="newList"
        component={RegisterList}
      />

      <Screen 
        name="newProduct"
        component={RegisterProduct}
      />
    </Navigator>
  );
}