import styled from 'styled-components/native';
import theme from '../../theme';

export const Paragraph = styled.Text`
  font-size: 16px;
  color: ${theme.secondary.color};
  font-weight: bold;
  text-align: center;
  font-family: ${theme.fonts.PoppinsBold};
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.secondary.color};
  text-align: center;
  margin-bottom: 8px;
  font-family: ${theme.fonts.PoppinsBold};
`;
