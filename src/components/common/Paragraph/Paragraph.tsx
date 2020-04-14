import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';

type OwnProps = {
  paragraph: string;
};

type Props = OwnProps;

const Paragraph: FunctionComponent<Props> = ({paragraph}) => {
  return (
    <Text
      style={{
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 24,
      }}>
      {paragraph}
    </Text>
  );
};

export default Paragraph;
