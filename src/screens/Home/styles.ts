import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;
`;

export const LineThrough = styled.View`
  height: 1.5px;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;