import {ANIMATION_SUCCESS, ANIMATION_FAILURE} from './types';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export type BaseAnimationState = {
  progressAmount: number;
};

export type AnimationState = BaseAnimationState;

const INITIAL_STATE: BaseAnimationState = {
  progressAmount: -width,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANIMATION_SUCCESS:
      return {...state, progressAmount: action.payload};
    case ANIMATION_FAILURE:
      return {...state};
    default:
      return {...state};
  }
};
