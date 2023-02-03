import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 52px;
  padding: 0 8px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextItem = styled.Text`
  flex: 1;
  margin-left: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const TextDate = styled.Text`
  margin-left: 8px;
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;