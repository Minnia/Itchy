import {createStore} from 'redux';
import rootReducer from './reducers';

//@ts-ignore
export const store = createStore(rootReducer);
