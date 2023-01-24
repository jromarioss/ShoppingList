import styled from 'styled-components/native';

export const Container = styled.View`
  height: 180px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-top: 62px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-right: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-weight: bold;
`;