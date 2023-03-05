import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Input = styled.TextInput`
  height: 52px;
  width: 100%;
  margin-bottom: 16px;
  padding: 14px;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const ViewInput = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const InputPrice = styled(Input)`
  flex: 1;
`;

export const InputUnity = styled(Input)`
  width: 130px;
  margin-left: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
`;

export const Text = styled.Text`
  margin-bottom: 32px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;