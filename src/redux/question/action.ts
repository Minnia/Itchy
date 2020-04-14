import {GET_QUESTIONS_SUCCESS, NEXT_QUESTION, PREVIOUS_QUESTION} from './types';

export const getQuestions = {
  type: GET_QUESTIONS_SUCCESS,
  request: {
    url: '/questions',
    request: 'GET',
  },
};

export const goForward = {
  type: NEXT_QUESTION,
};

export const goBack = {
  type: PREVIOUS_QUESTION,
};
