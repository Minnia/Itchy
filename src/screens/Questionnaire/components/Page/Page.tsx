import React, {FunctionComponent} from 'react';
import Paragraph from '../../../../components/common/Paragraph';
import {QuestionTitle} from './styled';
import Button from '../../../../components/common/Button';

type OwnProps = {
  buttons: string[];
  activeIndex: number;
  question: string;
  onPress: () => void;
};

type Props = OwnProps;

const Page: FunctionComponent<Props> = ({
  buttons,
  activeIndex,
  question,
  onPress,
}) => {
  return (
    <>
      <QuestionTitle>{`Fråga ${activeIndex} av 10`}</QuestionTitle>
      <Paragraph paragraph={question} />
      {buttons.map((title) => (
        <Button title={title} onPress={onPress} />
      ))}
    </>
  );
};

export default Page;
