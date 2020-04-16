import {
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
  SUBMIT_QUESTION,
} from './types';

export type BaseQuestionState = {
  activeIndex: number;
  answers: any;
};

export type QuestionState = BaseQuestionState;

const INITIAL_STATE: BaseQuestionState = {
  activeIndex: 0,
  answers: [],
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
    case SUBMIT_QUESTION:
      console.log('payload', action.payload);
      console.log('payload value', action.payload.value);

      return {
        ...state,
        answers: [
          ...state.answers,
          {[`question${action.payload.index}`]: action.payload.value},
        ],
      };
    default:
      return state;
  }
};
