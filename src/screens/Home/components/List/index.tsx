import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container, TextItem , Info} from './styles';

import { ListStorageDTO } from '../../../../storage/list/ListStorageDTO';

interface ListProps extends TouchableOpacityProps {
  data: ListStorageDTO;
}

export function List({ data, ...rest }: ListProps) {
  return (
    <Container {...rest}>
      <Info>
        <Feather name="shopping-bag" size={20} color="#C2C2C2" />
        <TextItem>
          {data.name}
        </TextItem>
      </Info>
      
      <Info>
        <TextItem>
          {data.cratedAt}
        </TextItem>
        <AntDesign name="calendar" size={20} color="#C2C2C2" />
      </Info>
    </Container>
  );
}