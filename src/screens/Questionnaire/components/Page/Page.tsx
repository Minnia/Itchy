import React, {FunctionComponent} from 'react';
import {Paragraph} from '../../../../components/common/styled';
import {QuestionTitle} from './styled';
import Button from '../../../../components/common/Button';
import {View} from 'react-native';
import {store} from '../../../../redux/store';
import * as actions from '../../../../redux/actions';
import layout from '../../../../theme/layout';

type Choice = {
  choice: string;
  value: number;
};

type OwnProps = {
  buttons: Choice[];
  activeIndex: number;
  question: string;
  isFollowUpQuestion?: boolean;
  onPress: (buttonIndex: number) => void;
};

type Props = OwnProps;

const Page: FunctionComponent<Props> = ({
  buttons,
  activeIndex,
  question,
  onPress,
  isFollowUpQuestion = false,
}) => {
  return (
    <>
      <QuestionTitle>{`Fråga ${activeIndex} ${
        isFollowUpQuestion ? `följdfråga` : `av 10`
      }`}</QuestionTitle>
      <Paragraph>{question}</Paragraph>
      <View
        style={{
          justifyContent: 'center',
          height: layout.height * 0.5,
          width: layout.width,
        }}>
        {buttons.map(({choice, value}, i) => {
          const submitAnswer = () => {
            if (value) {
              store.dispatch(
                actions.question.submitAnswer({value, index: activeIndex}),
              );
            }

            onPress(i);
          };
          return <Button title={choice} onPress={submitAnswer} key={i} />;
        })}
      </View>
    </>
  );
};

export default Page;
