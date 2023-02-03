import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.Text`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  text-align: center;
`;

export const CountArea = styled.View`
  width: 100%;
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CountAreaInsinde = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CountName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
`;

export const CountNumberArea = styled.View`
  height: 18px;
  margin-left: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const CountNumber = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: 500;
`;

export const LineThrough = styled.View`
  height: 1.5px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const TotalArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TotalPrice = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;