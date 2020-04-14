import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';

type OwnProps = {
  title: string;
};

type Props = OwnProps;

const Title: FunctionComponent<Props> = ({title}) => {
  return (
    <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
      {title}
    </Text>
  );
};

export default Title;
