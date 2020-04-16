import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

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
