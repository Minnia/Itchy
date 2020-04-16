import React, {useState, useEffect} from 'react';
import Title from '../../components/common/Title';
import form from '../../../questions.json';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Page from './components/Page';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Paragraph} from '../../components/common/styled';
import AnimatedBackground from './components/Page/AnimatedBackground';
import layout from '../../theme/layout';

const PageOneScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasFollowUpQuestion, setFollowUpQuestion] = useState(false);
  const [shouldShowFollowUpQuestion, setShowFollowUpQuestion] = useState(false);
  const question = form.questions[activeIndex];
  const followUpQuestion =
    form.questions[activeIndex].followUpQuestion &&
    form.questions[activeIndex].followUpQuestion;

  useEffect(() => {
    setFollowUpQuestion(!!followUpQuestion);
  }, [activeIndex]);

  const handlePress = (buttonIndex: number) => {
    if (
      hasFollowUpQuestion &&
      buttonIndex === followUpQuestion.choiceIndex &&
      !shouldShowFollowUpQuestion
    ) {
      return setShowFollowUpQuestion(true);
    } else {
      setShowFollowUpQuestion(false);
    }

    if (activeIndex + 1 >= form.questions.length) {
      return;
    }
    setActiveIndex(activeIndex + 1);
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          width: layout.width,
          height: layout.height,
        }}>
        <SafeAreaView
          style={{
            zIndex: 3,
            position: 'absolute',
          }}>
          <View style={{height: layout.height, width: layout.width}}>
            <Title title="Välmående DLQI" />
            {shouldShowFollowUpQuestion ? (
              <>
                <Page
                  isFollowUpQuestion
                  onPress={handlePress}
                  activeIndex={activeIndex + 1}
                  question={followUpQuestion.questionText}
                  buttons={followUpQuestion.choices}
                />
                {followUpQuestion.applicable && (
                  <TouchableOpacity>
                    <Paragraph>Ej tillämpligt</Paragraph>
                  </TouchableOpacity>
                )}
              </>
            ) : (
              <>
                <Page
                  onPress={handlePress}
                  activeIndex={activeIndex + 1}
                  question={question.questionText}
                  buttons={question.choices}
                />
                {question.applicable && (
                  <TouchableOpacity onPress={handlePress}>
                    <Paragraph>Ej tillämpligt</Paragraph>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </SafeAreaView>
        <AnimatedBackground activeIndex={activeIndex} />
      </View>
    </>
  );
};

export default PageOneScreen;
