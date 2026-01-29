import { configureStore } from '@reduxjs/toolkit';
import timeControlReducer from './reducers/timeControlsReducer.js';
import themeReducer from './reducers/ThemeReducer.js';
import { api } from './services/api.js';

export const store = configureStore({
	reducer: {
		timeControlsReducer: timeControlReducer,
		theme: themeReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});
