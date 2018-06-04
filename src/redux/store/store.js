import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import indexReducer from '../reducers/indexReducer';

export default createStore(indexReducer, applyMiddleware(thunk));