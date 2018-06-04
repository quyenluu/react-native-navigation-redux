import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import indexReducer from '../reducers/indexReducer';

export const store = createStore(indexReducer, applyMiddleware(thunk));