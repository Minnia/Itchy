import React, {FunctionComponent, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Animated, View} from 'react-native';
import form from '../../../../../questions.json';
import {store} from '../../../../redux/store';
import * as actions from '../../../../redux/actions';
import layout from '../../../../theme/layout';
import theme from '../../../../theme/index';

type OwnProps = {
  activeIndex: number;
};

type Props = OwnProps;

const AnimatedBackground: FunctionComponent<Props> = ({activeIndex}) => {
  const animation = useSelector((state) => state.animation);
  const progress = new Animated.Value(animation.progressAmount);
  const progressIncrement = 1 / form.questions.length;
  const animateProgress = () => {
    let incrementValue = Math.floor(
      animation.progressAmount + layout.width * progressIncrement,
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
          backgroundColor: theme.primary.onColor,
          height: layout.height,
          width: layout.width,
          zIndex: 2,
          position: 'absolute',
          left: 0,
          transform: [{translateX: progress}],
        }}
      />
      <View
        style={{
          zIndex: 1,
          backgroundColor: theme.primary.color,
          height: layout.height,
          width: layout.width,
        }}
      />
    </>
  );
};

export default AnimatedBackground;
