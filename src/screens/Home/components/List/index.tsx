import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Container, TextItem , Info} from './styles';

interface ListProps extends TouchableOpacityProps {
  title: string;
  date: string;
}

export function List({ title, date, ...rest }: ListProps) {

  return (
    <Container {...rest}>
      <Info>
        <Feather name="shopping-bag" size={20} color="#C2C2C2" />
        <TextItem>
          {title}
        </TextItem>
      </Info>
      
      <Info>
        <TextItem>
          {date}
        </TextItem>
        <AntDesign name="calendar" size={20} color="#C2C2C2" />
      </Info>
    </Container>
  );
}