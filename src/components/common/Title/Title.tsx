import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';

type OwnProps = {
  title: string;
};

type Props = OwnProps;

const Title: FunctionComponent<Props> = ({title}) => {
  return (
    <Text
      style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 8,
      }}>
      {title}
    </Text>
  );
};

export default Title;
