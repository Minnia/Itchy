import {QuestionState, questionReducer} from './question';
import {combineReducers} from 'redux';

export type MainState = {
  question: QuestionState;
};

export default combineReducers({question: questionReducer});
