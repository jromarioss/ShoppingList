import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 84px;
  width: 100%;
  align-items: center;
`;

export const ListEmptyTitle = styled.Text`
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: 500;
`;

export const ListEmptyText = styled.Text`
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;