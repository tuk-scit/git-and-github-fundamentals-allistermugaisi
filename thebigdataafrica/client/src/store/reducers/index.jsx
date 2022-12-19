import { combineReducers } from 'redux';
import auth from './auth-reducer';
import surveys from './survey-reducer';
import clients from './client-reducer';
import researchers from './researcher-reducer';
import questions from './question-reducer';
import options from './option-reducer';
import answers from './answer-reducer';
import error from './error-reducer';

const rootReducer = combineReducers({
	auth,
	surveys,
	clients,
	researchers,
	questions,
	options,
	answers,
	error,
});

export default rootReducer;
