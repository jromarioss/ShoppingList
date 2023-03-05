import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 52px;
  padding: 0 4px;
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextItem = styled.Text`
  padding: 0 8px 0 4px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const TextItemName = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const TextItemLineThrough = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-decoration: line-through;
`;