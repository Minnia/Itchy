import {
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
} from './types';

export type BaseQuestionState = {
  activeIndex: number;
};

export type QuestionState = BaseQuestionState;

const INITIAL_STATE: BaseQuestionState = {
  activeIndex: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return {...state};
    case GET_QUESTIONS_FAILURE:
      return {...state};
    case NEXT_QUESTION:
      return {...state, activeIndex: state.activeIndex + 1};
    case PREVIOUS_QUESTION:
      return {...state, activeIndex: state.activeIndex - 1};
    default:
      return {state};
  }
};
