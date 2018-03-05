import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import nav from './reducers/nav.js';
import messages from './reducers/messages.js';



const rootReducer = combineReducers({
	nav,
	messages
});

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export default store;
