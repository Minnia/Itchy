import {QuestionState, questionReducer} from './question';
import {AnimationState, animationReducer} from './animation';
import {combineReducers} from 'redux';

export type MainState = {
  question: QuestionState;
  animation: AnimationState;
};

export default combineReducers({
  question: questionReducer,
  animation: animationReducer,
});
