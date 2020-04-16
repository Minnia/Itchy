import {ANIMATION_SUCCESS, ANIMATION_FAILURE} from './types';

export const animateProgress = (progressAmount: number) => {
  return {
    type: ANIMATION_SUCCESS,
    payload: progressAmount,
  };
};
