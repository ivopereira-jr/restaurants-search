// serve para meio que guardar as infos ver mais sobre na doc
import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
