import React, {FunctionComponent} from 'react';
import {Button as RNButton, View, Text} from 'react-native';
import {ButtonView} from './styled';
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
        shadowColor: '#dbdbdb',
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
          backgroundColor: '#ffffff',
          opacity: 0.12,
        }}
      />
      <Text
        style={{
          fontFamily: theme.fonts.PoppinsBold,
          color: 'white',
          fontWeight: 'bold',
          top: height * 0.5 - 16 * 0.5,
          position: 'absolute',
          alignSelf: 'center',
        }}>
        {title}
      </Text>
    </ButtonView>
  );
};
export default Button;
