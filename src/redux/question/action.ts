import {NEXT_QUESTION, PREVIOUS_QUESTION, SUBMIT_QUESTION} from './types';

export const submitAnswer = ({index, value}) => ({
  type: SUBMIT_QUESTION,
  payload: {index, value},
});

export const goForward = () => ({
  type: NEXT_QUESTION,
});

export const goBack = () => ({
  type: PREVIOUS_QUESTION,
});
