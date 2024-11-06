import { configureStore } from "@reduxjs/toolkit";

 import logger from 'redux-logger';

 import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(middleWares),

  // To disable serializable check and include own middleware
  // middleware: (getDefaultMiddleware) => 
  //   getDefaultMiddleware({ 
  //     serializableCheck: false,
  //   }).concat(middleWares),
});
