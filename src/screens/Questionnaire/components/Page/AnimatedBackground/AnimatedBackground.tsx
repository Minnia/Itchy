import React, {FunctionComponent, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Animated, Dimensions, View} from 'react-native';
import form from '../../../../../../questions.json';
import {store} from '../../../../../redux/store';
import * as actions from '../../../../../redux/actions';

type OwnProps = {
  activeIndex: number;
};

type Props = OwnProps;

const AnimatedBackground: FunctionComponent<Props> = ({activeIndex}) => {
  const animation = useSelector((state) => state.animation);
  const progress = new Animated.Value(animation.progressAmount);
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
  const progressIncrement = 1 / form.questions.length;
  const animateProgress = () => {
    let incrementValue = Math.floor(
      animation.progressAmount + width * progressIncrement,
    );
    Animated.timing(progress, {
      toValue: incrementValue,
      useNativeDriver: false,
    }).start(() =>
      store.dispatch(actions.animation.animateProgress(incrementValue)),
    );
  };
  useEffect(() => {
    animateProgress();
  }, [activeIndex]);
  return (
    <>
      <Animated.View
        style={{
          backgroundColor: '#8494ED',
          height,
          width,
          zIndex: 2,
          position: 'absolute',
          left: 0,
          transform: [{translateX: progress}],
        }}
      />
      <View
        style={{
          zIndex: 1,
          backgroundColor: '#bcc6ff',
          height,
          width,
        }}
      />
    </>
  );
};

export default AnimatedBackground;
