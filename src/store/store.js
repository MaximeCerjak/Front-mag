import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import pictureReducer from '../reducers/pictureReducer';

const rootReducer = {
  auth: authReducer,
  pictures: pictureReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;