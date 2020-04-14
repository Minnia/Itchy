import React, {FunctionComponent} from 'react';
import {Button as RNButton, View} from 'react-native';
import {ButtonView} from './styled';

type OwnProps = {
  title: string;
  onPress: () => void;
  index?: number;
};

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({title, onPress}) => {
  return (
    <ButtonView
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}>
      <RNButton title={title} onPress={onPress} color="white" />
    </ButtonView>
  );
};
export default Button;
