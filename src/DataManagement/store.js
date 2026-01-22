import { configureStore } from '@reduxjs/toolkit';
import timeControlReducer from './reducers/timeControlsReducer.js';
import { api } from './services/api.js';

export const store = configureStore({
	reducer: {
		timeControlsReducer: timeControlReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});
