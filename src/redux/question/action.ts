import {SUBMIT_QUESTION} from './types';

export const submitAnswer = ({index, value}) => ({
  type: SUBMIT_QUESTION,
  payload: {index, value},
});
