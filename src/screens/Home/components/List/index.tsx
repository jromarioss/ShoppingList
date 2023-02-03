import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import { Container, TextItem, Info, TextDate} from './styles';

import { ListStorageDTO } from '../../../../storage/list/ListStorageDTO';

interface ListProps extends TouchableOpacityProps {
  data: ListStorageDTO;
}

export function List({ data, ...rest }: ListProps) {
  return (
    <Container {...rest}>
      <Feather name="shopping-bag" size={20} color="#C2C2C2" />
      <TextItem numberOfLines={1}>
        {data.name}
      </TextItem>

      <Info >
        <TextDate>
          {data.cratedAt}
        </TextDate>
        <AntDesign name="calendar" size={20} color="#C2C2C2" />
      </Info>
    </Container>
  );
}