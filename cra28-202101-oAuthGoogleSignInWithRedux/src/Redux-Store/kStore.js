// import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {iKgoogleUserObject_REDUCER} from '../Redux-Reducers/kReducer1.js';
/**/
/**/
const kAllReducers = combineReducers({
    iKgoogleUserObject_REDUCER: iKgoogleUserObject_REDUCER
});

    /*iK If you are using applyMiddleware()  */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose; /*1+*/
    /*iK If you are not using applyMiddleware() */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /*2+*/

const kStore1 = createStore(
    kAllReducers,
    composeEnhancers(
		applyMiddleware(ReduxThunk)
	)
); /*END kStore1 */

/*1+ ensure you install redux devtool for you to use its features. 
2+ replace composeEnhancer() in kStore1() with this code if you are not using applyMiddleware() s*/

export default kStore1;