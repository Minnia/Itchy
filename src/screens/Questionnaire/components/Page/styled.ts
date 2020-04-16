import styled from 'styled-components/native';
import {Text} from 'react-native';
import theme from '../../../../theme';

export const QuestionTitle = styled(Text)`
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: ${theme.fonts.CorbenBold};
`;
