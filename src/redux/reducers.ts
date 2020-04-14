import {QuestionState, questionReducer} from './question';
export type MainState = {
  question: QuestionState;
};

export default {question: questionReducer};
