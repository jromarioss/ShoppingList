import { ViewProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, ListEmptyText, ListEmptyTitle,  } from './styles';

interface ListEmptyProps extends ViewProps {
  title: string;
  text: string;
}

export function ListEmpty({ title, text, ...rest }: ListEmptyProps) {
  return (
    <Container {...rest}>
      <ListEmptyTitle>
        {title}
      </ListEmptyTitle>
      <ListEmptyText>
        {text}
      </ListEmptyText>
      <MaterialIcons name="content-paste" size={84} color="#474747" />
    </Container>
  );
}