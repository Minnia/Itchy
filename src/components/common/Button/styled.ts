import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import theme from '../../../theme';

export const ButtonView = styled(TouchableOpacity)<{
  width: number;
  height: number;
  borderRadius: number;
}>`
  align-self: center;
  justify-content: center;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: ${({borderRadius}) => borderRadius}px;
  margin-bottom: 8px;
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.PoppinsBold};
  color: ${theme.secondary.color};
  font-weight: bold;
  top: ${50 * 0.5 - 16 * 0.5};
  position: absolute;
  align-self: center;
`;
