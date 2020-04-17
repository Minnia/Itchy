import React, {FunctionComponent} from 'react';
import {Button as RNButton, View, Text} from 'react-native';
import {ButtonView, ButtonText} from './styled';
import theme from '../../../theme';

type OwnProps = {
  title: string;
  onPress: () => void;
  index?: number;
};

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({title, onPress}) => {
  const height = 50;
  const width = 330;
  const borderRadius = 50;
  return (
    <ButtonView
      height={height}
      width={width}
      borderRadius={borderRadius}
      onPress={onPress}
      style={{
        shadowColor: theme.secondary.onColor,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 3.8,
        elevation: 3,
        position: 'relative',
      }}>
      <View
        style={{
          height,
          width,
          borderRadius,
          backgroundColor: theme.secondary.color,
          opacity: 0.12,
        }}
      />
      <ButtonText>{title}</ButtonText>
    </ButtonView>
  );
};
export default Button;
